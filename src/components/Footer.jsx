import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/10 border-t border-border mt-20 py-12 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Branding and copyright */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-primary tracking-wide">
              Kace
            </h4>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Crafted with care and code ✨
            </p>
          </div>

          {/* Scroll to top */}
          <a
            href="#hero"
            className="p-2 rounded-full border border-primary hover:bg-primary/10 text-primary transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
