import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface FormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FormDialog = ({ open, onOpenChange }: FormDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="px-6 pt-6 pb-4 bg-gradient-to-r from-primary to-secondary">
          <DialogTitle className="text-2xl font-heading font-bold text-white">
            Study Abroad - Application Form
          </DialogTitle>
        </DialogHeader>
        <div className="w-full overflow-y-auto" style={{ height: "70vh" }}>
          <iframe
            id="JotFormIFrame-252916583922061"
            title="STUDY ABROAD - APPLICATION FORM"
            allowTransparency={true}
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/252916583922061"
            style={{ minWidth: "100%", maxWidth: "100%", height: "100%", border: "none" }}
            scrolling="no"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
