import { Link } from "@/lib/router-compat";
import { Mail, Phone, MapPin, Facebook, Linkedin, Clock } from "lucide-react";
import { services } from "@/data/services";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Our Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.slug}`} className="hover:text-accent transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Address */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Address</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Grow Force</p>
                  <p className="text-sm">Community Hall</p>
                  <p className="text-sm">farm road, Sangharsh Nagar</p>
                  <p className="text-sm"> Chandivali, Powai</p>
                  <p className="text-sm">Mumbai, Maharashtra 400072</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+918692978344" className="hover:text-accent transition-colors">+91 8692978344</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:team.growforce@gmail.com" className="hover:text-accent transition-colors">team.growforce@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Mon - Sat: 9:00AM - 5:30PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            Copyright©growforce.in. All rights reserved.
            <br className="md:hidden" />
            <span className="ml-2">Design By DeployMyDream</span>
          </p>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
