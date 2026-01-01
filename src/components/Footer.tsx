import { Link } from "react-router-dom";
import { Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="font-serif-italic text-xl font-bold mb-3">
              Sincerely, People With Periods
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A student-led initiative fighting period poverty through education, advocacy, and community action.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/our-story" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/events/upcoming" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-3">Connect With Us</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@sincerelyperiods.org"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 fill-current" /> in Richmond, Virginia
          </p>
          <p className="mt-1">© {new Date().getFullYear()} Sincerely, People With Periods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
