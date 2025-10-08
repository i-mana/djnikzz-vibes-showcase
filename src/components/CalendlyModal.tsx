import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface CalendlyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  calendlyUrl: string;
}

export const CalendlyModal = ({ open, onOpenChange, calendlyUrl }: CalendlyModalProps) => {
  useEffect(() => {
    if (open) {
      // Load Calendly widget script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      // Listen for Calendly events
      const handleCalendlyEvent = async (e: MessageEvent) => {
        if (e.data.event && e.data.event === 'calendly.event_scheduled') {
          console.log('Calendly event scheduled:', e.data);
          
          try {
            const payload = e.data.payload;
            
            // Save booking details to database
            const { error } = await supabase.from('bookings').insert({
              event_type: payload.event?.name || 'Event Booking',
              invitee_name: payload.invitee?.name || '',
              invitee_email: payload.invitee?.email || '',
              invitee_notes: payload.questions_and_answers?.[0]?.answer || null,
              event_start_time: payload.event?.start_time || null,
              event_end_time: payload.event?.end_time || null,
              calendly_event_uri: payload.event?.uri || null,
            });

            if (error) {
              console.error('Error saving booking:', error);
              toast.error('Booking scheduled but failed to save details');
            } else {
              console.log('Booking saved successfully');
              toast.success('Event scheduled successfully!');
            }
          } catch (error) {
            console.error('Error processing booking:', error);
          }
        }
      };

      window.addEventListener('message', handleCalendlyEvent);

      return () => {
        document.body.removeChild(script);
        window.removeEventListener('message', handleCalendlyEvent);
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] p-0 bg-card">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Book Your Event
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 px-6 pb-6">
          <div 
            className="calendly-inline-widget h-full w-full rounded-lg" 
            data-url={calendlyUrl}
            style={{ minHeight: '500px' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};