import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface FormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FormDialog = ({ open, onOpenChange }: FormDialogProps) => {
  useEffect(() => {
    if (open) {
      // Load JotForm script when dialog opens
      const script = document.createElement('script');
      script.src = 'https://form.jotform.com/jsform/252916583922061';
      script.type = 'text/javascript';
      script.id = 'jotform-script';
      
      const container = document.getElementById('jotform-container');
      if (container) {
        container.innerHTML = '';
        container.appendChild(script);
      }
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
          id="jotform-container"
          className="w-full overflow-y-auto" 
          style={{ height: "70vh" }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
