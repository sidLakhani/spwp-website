import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    label: "About",
    items: [
      { label: "Our Story", href: "/our-story" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Guides", href: "/guides" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    label: "Events",
    items: [
      { label: "Upcoming", href: "/events/upcoming" },
      { label: "Past Events", href: "/events/past" },
    ],
  },
  {
    label: "More",
    items: [
      { label: "Contact", href: "/contact" },
      { label: "Volunteer", href: "/volunteer" },
    ],
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-secondary shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="font-serif-italic text-lg lg:text-xl font-bold text-primary whitespace-nowrap">
            Sincerely, People With Periods
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <button className="flex items-center gap-1 text-primary font-medium hover:text-primary/80 transition-colors py-2">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown */}
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <ul className="bg-background rounded-lg shadow-lg border border-border py-2 min-w-[150px]">
                    {item.items.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          to={subItem.href}
                          className="block px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>

          {/* Donate Button */}
          <Button className="hidden lg:inline-flex" size="lg">
            Donate
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full px-4 py-3 text-primary font-medium bg-background rounded-lg"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {openDropdown === item.label && (
                    <ul className="mt-1 ml-4 space-y-1">
                      {item.items.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            to={subItem.href}
                            className="block px-4 py-2 text-foreground hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 px-4">
              <Button className="w-full" size="lg">
                Donate
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
