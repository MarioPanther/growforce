import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CookieBannerProps {
  onClose: () => void;
}

const CookieBanner = ({ onClose }: CookieBannerProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-in-up">
      <div className="bg-card border-t-2 border-border shadow-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Cookie className="h-6 w-6 text-accent shrink-0" />
              <div>
                <p className="text-sm text-foreground">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                  By clicking "I Agree", you consent to our use of cookies.
                </p>
              </div>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button variant="ghost" size="sm" onClick={onClose}>
                No, Thanks
              </Button>
              <Button size="sm" onClick={onClose} className="bg-gradient-accent">
                I Agree
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
