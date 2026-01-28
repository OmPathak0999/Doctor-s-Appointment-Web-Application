import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">Prescripto</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
Prescripto is a smart doctor appointment platform that helps patients find verified doctors, check availability, and book consultations easily. With a secure and user-friendly interface, it ensures fast, reliable, and convenient access to quality healthcare services.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">COMPANY</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">GET IN TOUCH</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground text-sm">
                +1-212-456-7890
              </li>
              <li className="text-muted-foreground text-sm">
                prescripto@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-10 pt-6">
          <p className="text-center text-muted-foreground text-sm">
            Copyright © 2025 Prescripto - All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
