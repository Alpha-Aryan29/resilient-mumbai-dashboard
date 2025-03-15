
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Map, Activity, MessageCircle, Shield, Bell, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Dashboard", path: "/dashboard", icon: <Activity className="h-4 w-4 mr-2" /> },
    { name: "Dengue Map", path: "/dengue-map", icon: <Map className="h-4 w-4 mr-2" /> },
    { name: "Community", path: "/community-forum", icon: <Users className="h-4 w-4 mr-2" /> },
    { name: "Mental Health", path: "/mental-health", icon: <MessageCircle className="h-4 w-4 mr-2" /> },
    { name: "Pollution", path: "/pollution", icon: <Shield className="h-4 w-4 mr-2" /> },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-semibold text-foreground"
          onClick={closeMobileMenu}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 flex items-center justify-center text-white">
            HR
          </div>
          <span className="hidden md:inline">Health Resilience</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-3 py-2 rounded-full text-sm font-medium flex items-center transition-all duration-300",
                location.pathname === link.path
                  ? "bg-primary text-white shadow-sm"
                  : "text-foreground/80 hover:bg-secondary hover:text-foreground"
              )}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
              3
            </span>
          </Button>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-[60px] z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container mx-auto px-4 pt-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "p-3 rounded-lg flex items-center transition-all duration-200",
                location.pathname === link.path
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground/80 hover:bg-secondary"
              )}
              onClick={closeMobileMenu}
            >
              {link.icon}
              <span className="text-base">{link.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
