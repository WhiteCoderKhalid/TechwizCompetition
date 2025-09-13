import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo1.jpg"; 
import {
  Menu,
  X,
  Calendar,
  Camera,
  MessageSquare,
  Phone,
  Info,
} from "lucide-react";


  function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false); 
  const location = useLocation(); 

  const navItems = [
    { label: "Home", path: "/", icon: Calendar },
    { label: "About", path: "/about", icon: Info },
    { label: "Events", path: "/events", icon: Calendar },
    { label: "Gallery", path: "/gallery", icon: Camera },
    { label: "Feedback", path: "/feedback", icon: MessageSquare },
    { label: "Contact", path: "/contact", icon: Phone },
  ];

  const isLinkActive = (path) => location.pathname === path; 
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="CampusConnect Logo"
              className="h-10 w-auto rounded-xl shadow-md"
            />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CampusConnect
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => {
              const Icon = item.icon; 
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm lg:text-base font-medium transition-colors ${
                    isLinkActive(item.path)
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

         
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

    
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="border-t bg-white/95 backdrop-blur px-2 py-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon; 
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMenuOpen(false)} 
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isLinkActive(item.path)
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
