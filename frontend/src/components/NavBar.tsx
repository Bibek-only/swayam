import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-primary">Swayam</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <NavLink to="/problems" className="text-foreground hover:text-primary transition">
              Problems
            </NavLink>
            <NavLink to="/solutions" className="text-foreground hover:text-primary transition">
              Solutions
            </NavLink>
            <NavLink to="/farmers" className="text-foreground hover:text-primary transition">
              Farmers
            </NavLink>
            <NavLink to="/organizations" className="text-foreground hover:text-primary transition">
              Organizations
            </NavLink>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex gap-4">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              asChild
            >
              <NavLink to="/signin">Sign In</NavLink>
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <NavLink to="/signup">Sign Up</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-4 mt-4">
              <NavLink to="/#problems" className="text-foreground hover:text-primary">
                Problems
              </NavLink>
              <NavLink to="/#solutions" className="text-foreground hover:text-primary">
                Solutions
              </NavLink>
              <NavLink to="/farmers" className="text-foreground hover:text-primary">
                Farmers
              </NavLink>
              <NavLink to="/organizations" className="text-foreground hover:text-primary">
                Organizations
              </NavLink>
              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary bg-transparent"
                  asChild
                >
                  <NavLink to="/signin">Sign In</NavLink>
                </Button>
                <Button className="flex-1 bg-primary text-white" asChild>
                  <NavLink to="/signup">Sign Up</NavLink>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
