import { Link } from "@/lib/router-compat";
import { Menu, X, Phone, Mail, ChevronDown, Facebook, Linkedin } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/services";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="site-top-bar w-full bg-accent text-accent-foreground py-2 px-4">
        <div className="site-top-bar__inner container mx-auto flex justify-between items-center text-sm">
          <div className="site-header-contacts flex items-center gap-6">
            <a href="tel:+918692978344" className="site-header-contact-link flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3" />
              <span className="site-header-contact-text">+91 86929 78344</span>
            </a>
            <a href="mailto:team.growforce@gmail.com" className="site-header-contact-link flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-3 h-3" />
              <span className="site-header-contact-text">team.growforce@gmail.com</span>
            </a>
          </div>
          <div className="site-header-social flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <div className="text-2xl font-bold">
              <span className="text-accent">Factor</span>
              <span className="text-primary">Human</span>
            </div> */}
            <Image
              src="/growthlogo4.png"
              alt="Grow Force"
              width={320}
              height={320}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-accent transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link 
                to="/services" 
                className="text-sm font-medium hover:text-accent transition-colors flex items-center gap-1 relative group"
              >
                Our Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </Link>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg py-2 animate-fade-in z-50">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* <Link to="/blog" className="text-sm font-medium hover:text-accent transition-colors relative group">
              News
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link> */}
            {/* <Link to="/blog" className="text-sm font-medium hover:text-accent transition-colors relative group">
              Blogs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link> */}
            <Link to="/upload-resume" className="text-sm font-medium hover:text-accent transition-colors relative group">
              Upload Resume
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-accent transition-colors relative group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/services" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Our Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="pl-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
              <Link to="/blog" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                News
              </Link>
              {/* <Link to="/blog" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Blogs
              </Link> */}
              <Link to="/upload-resume" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Upload Resume
              </Link>
              <Link to="/contact" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
