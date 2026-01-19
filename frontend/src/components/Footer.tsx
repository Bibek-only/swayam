import { NavLink } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf size={28} className="text-accent" />
              <span className="text-2xl font-bold">Swayam</span>
            </div>
            <p className="text-white/80">
              Connecting farmers with organizations for sustainable organic
              stubble management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/farmers"
                  className="text-white/80 hover:text-white transition"
                >
                  Farmers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/organizations"
                  className="text-white/80 hover:text-white transition"
                >
                  Organizations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-white/80 hover:text-white transition"
                >
                  How it Works
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reviews"
                  className="text-white/80 hover:text-white transition"
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>

          {/* For Farmers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Farmers</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/signup"
                  className="text-white/80 hover:text-white transition"
                >
                  Join as Farmer
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-white/80 hover:text-white transition"
                >
                  List Stubbles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-white/80 hover:text-white transition"
                >
                  Get Support
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-white/80 hover:text-white transition"
                >
                  Pricing
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-white/80">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <span>support@swayam.com</span>
              </li>
              <li className="flex gap-3 text-white/80">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <span>+91 1800-SWAYAM-1</span>
              </li>
              <li className="flex gap-3 text-white/80">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80">
              © 2024 Swayam. All rights reserved. | Sustainable Agriculture
              Initiative
            </p>
            <div className="flex gap-6">
              <NavLink
                to="/"
                className="text-white/80 hover:text-white transition"
              >
                Privacy Policy
              </NavLink>
              <NavLink
                to="/"
                className="text-white/80 hover:text-white transition"
              >
                Terms of Service
              </NavLink>
              <NavLink
                to="/"
                className="text-white/80 hover:text-white transition"
              >
                Cookie Policy
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer