import { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface FormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FormDialog = ({ open, onOpenChange }: FormDialogProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && containerRef.current) {
      // Clear any existing content first
      containerRef.current.innerHTML = '';
      
      // Create and add the JotForm script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://form.jotform.com/jsform/252916583922061';
      
      // Append script to container
      containerRef.current.appendChild(script);
      
      // Cleanup function to remove script when dialog closes
      return () => {
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
        }
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="px-6 pt-6 pb-4 bg-gradient-to-r from-primary to-secondary">
          <DialogTitle className="text-2xl font-heading font-bold text-white">
            Study Abroad - Application Form
          </DialogTitle>
        </DialogHeader>
        <div 
          ref={containerRef}
          className="w-full overflow-y-auto px-6 pb-6" 
          style={{ height: "70vh" }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
