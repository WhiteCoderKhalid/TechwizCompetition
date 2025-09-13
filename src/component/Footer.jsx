import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../Assets/logo1.jpg"; 
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";


  function Footer(){
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
         
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img
                src={logo1}
                alt="CampusConnect Logo" 
                className="h-10 w-auto rounded-lg shadow-md"
              />
              <span className="text-xl font-bold tracking-wide text-white">
                CampusConnect
              </span>
            </div>

            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Connecting students through engaging campus events. Discover,
              participate, and create memorable experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://web.facebook.com/Aptech/"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/aptechltd"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/aptechsiteofficial/"
                className="text-gray-300 hover:text-pink-400 transition-colors" // Pink for Instagram feels right
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/school/aptech-learning/"
                className="text-gray-300 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => ( 
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Aptech Center Abeokuta</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+2348034345565</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@campusconnect.edu</span>
              </div>
            </div>
          </div>
        </div>

      
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-300 text-xs md:text-sm">
            © 2024 TechWiz Team Data Dynamos CampusConnect. All rights reserved 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;