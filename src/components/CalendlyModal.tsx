import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect } from "react";

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

      return () => {
        document.body.removeChild(script);
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
