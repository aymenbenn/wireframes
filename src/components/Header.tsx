import React from 'react';
import { Phone, Mail, Search, User, ShoppingCart } from 'lucide-react';
export function Header() {
  return (
    <header className="w-full flex flex-col items-center bg-bgLight">
      {/* Top Bar */}
      <div className="w-full max-w-[1440px] px-4 md:px-8 h-auto py-4 md:py-0 md:h-[100px] flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo Area */}
        <div className="flex flex-col items-start justify-center cursor-pointer">
          <div className="flex items-center">
            <span className="text-3xl font-montserrat font-bold text-primary">
              Horeca
            </span>
            <span className="text-3xl font-montserrat font-bold text-accent">
              Gemak
            </span>
          </div>
          <span className="text-xs text-muted font-poppins">
            Wij maken het gemakkelijk!
          </span>
        </div>

        {/* Contact & Search */}
        <div className="flex flex-col w-full md:w-auto flex-1 max-w-3xl px-0 md:px-8 gap-2">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="text-primary font-poppins font-semibold">
                      +31 (0) 85-0606072
                    </span>
                    <span className="text-[10px] text-gray-500 hidden lg:inline">
                      ma - vr 08:30 - 17:30
                    </span>
                  </div>
                  <span className="text-accent font-poppins font-semibold text-xs uppercase">
                    verkoop & advies
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-primary font-poppins text-sm">
                  Stuur een email
                </span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full relative flex items-center">
            <input
              type="text"
              placeholder="Waar bent u naar op zoek?"
              className="w-full h-10 pl-4 pr-12 rounded border border-gray-300 focus:outline-none focus:border-primary font-poppins text-sm" />
            
            <button className="absolute right-0 top-0 h-10 w-12 flex items-center justify-center bg-primary rounded-r text-white hover:bg-primaryDark transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* User & Cart */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <User className="w-6 h-6 text-primary" />
            <span className="text-primary font-poppins text-sm hidden lg:inline">
              Inloggen
            </span>
          </div>
          <div className="hidden lg:block cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-primary font-poppins text-sm">
              Klantenservice
            </span>
          </div>

          <div className="flex items-center h-10 bg-white rounded border border-gray-200 shadow-sm">
            <div className="px-3 flex items-center justify-center border-r border-gray-200">
              <span className="font-poppins font-semibold text-sm">0,-</span>
            </div>
            <div className="px-3 flex items-center justify-center relative cursor-pointer">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              <div className="absolute top-1 right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center text-white text-[9px] font-bold">
                0
              </div>
            </div>
            <button className="h-full px-4 bg-accent text-white font-poppins text-xs font-semibold uppercase rounded-r hover:bg-accentHover transition-colors">
              Bestellen
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full bg-primary flex justify-center shadow-md relative z-10">
        <div className="w-full max-w-[1440px] px-4 md:px-8 flex items-center overflow-x-auto no-scrollbar">
          <ul className="flex items-center h-11 whitespace-nowrap">
            <li className="px-4 h-full flex items-center cursor-pointer hover:bg-primaryDark transition-colors">
              <span className="text-white font-montserrat font-semibold text-sm">
                Keukenapparatuur
              </span>
            </li>
            <li className="px-4 h-full flex items-center cursor-pointer bg-primaryDark">
              <span className="text-white font-montserrat font-semibold text-sm">
                Koelen & Vriezen
              </span>
            </li>
            <li className="px-4 h-full flex items-center cursor-pointer hover:bg-primaryDark transition-colors">
              <span className="text-white font-montserrat font-semibold text-sm">
                Klein Materiaal
              </span>
            </li>
            <li className="px-4 h-full flex items-center cursor-pointer hover:bg-primaryDark transition-colors">
              <span className="text-white font-montserrat font-semibold text-sm">
                Warmhouden
              </span>
            </li>
            <li className="px-4 h-full flex items-center cursor-pointer hover:bg-primaryDark transition-colors">
              <span className="text-white font-montserrat font-semibold text-sm">
                Hygiëne & Vaatwassers
              </span>
            </li>
            <li className="px-4 h-full flex items-center cursor-pointer hover:bg-primaryDark transition-colors">
              <span className="text-white font-montserrat font-semibold text-sm">
                Presentatie
              </span>
            </li>
            <li className="px-4 h-full flex items-center cursor-pointer hover:bg-primaryDark transition-colors">
              <span className="text-white font-montserrat font-semibold text-sm">
                Afzuiging
              </span>
            </li>
            <li className="px-4 h-full flex items-center cursor-pointer hover:bg-primaryDark transition-colors">
              <span className="text-white font-montserrat font-semibold text-sm">
                RVS
              </span>
            </li>
            <li className="px-4 h-full flex items-center cursor-pointer hover:bg-primaryDark transition-colors">
              <span className="text-white font-montserrat font-semibold text-sm">
                Meubilair
              </span>
            </li>
            <li className="px-4 h-full flex items-center cursor-pointer hover:bg-primaryDark transition-colors">
              <span className="text-white font-montserrat font-semibold text-sm">
                Overig
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>);

}