import React from 'react';
import { Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="w-full bg-bgFooter pt-16 mt-12">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Newsletter & Contact Cards */}
        <div className="flex flex-col gap-8 -mt-32 relative z-10 mb-16">
          {/* Newsletter Card */}
          <div className="w-full bg-[#E2F2F8] rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-sm overflow-hidden relative">
            <div className="relative z-10 max-w-xl">
              <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-[#2C333A] mb-4">
                Ontvang nieuwe aanbiedingen per e-mail!
              </h2>
              <p className="font-poppins text-[15px] text-[#2C333A] mb-8">
                Met onze nieuwsbrief loopt u nooit meer aanbiedingen mis en
                ontvangt u een tegoedbon van €20
              </p>

              <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="jouw e-mailadres"
                    className="w-full h-12 px-4 rounded bg-white border-none focus:ring-2 focus:ring-primary outline-none font-poppins text-sm" />
                  
                </div>
                <button className="h-12 px-8 bg-accent hover:bg-accentHover text-white font-poppins font-semibold rounded transition-colors">
                  Inschrijven
                </button>
              </div>

              <p className="font-poppins text-[13px] text-[#92A3B6] mb-1">
                Je gegevens worden niet met derde partijen gedeeld
              </p>
              <p className="font-poppins text-[13px] text-[#92A3B6]">
                *Kortingscode geldig bij besteding vanaf 300 euro
              </p>
            </div>

            {/* Decorative Graphic Placeholder */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[300px] opacity-20 pointer-events-none">
              <Mail className="w-full h-full text-primary" />
            </div>
          </div>

          {/* Contact Info Row */}
          <div className="w-full bg-white rounded-lg border-b border-gray-200 shadow-sm p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 lg:w-2/3">
              <div className="pr-8 md:border-r border-gray-300">
                <h3 className="font-poppins font-bold text-3xl text-gray-800 mb-4">
                  Heeft u vragen?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <span className="font-poppins font-bold text-lg text-[#2C333A]">
                    +31 (0)85-0606072
                  </span>
                  <span className="font-poppins font-bold text-lg text-[#2C333A]">
                    info@horecagemak.nl
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 font-poppins font-bold text-[13px] text-gray-700">
                <p>Whatsapp — Ma t/m vr 8.30 - 17.30</p>
                <p>Chatten — Ma t/m vr 8.30 - 17.30</p>
                <p>Bellen — Ma t/m vr 8.30 - 17.30</p>
                <p>Mailen — Mag altijd!</p>
              </div>
            </div>

            <div className="w-full lg:w-1/3 bg-[#EBEBEB] rounded-lg p-6 flex items-center justify-between">
              <div>
                <p className="font-poppins font-bold text-base text-[#2C333A] mb-1">
                  WhatsApp-service
                </p>
                <p className="font-poppins font-bold text-xl text-[#1DA110]">
                  +31 612676861
                </p>
              </div>
              <div className="w-20 h-20 bg-white rounded p-1 flex items-center justify-center">
                {/* QR Code Placeholder */}
                <div className="w-full h-full bg-gray-200 border border-gray-300 flex items-center justify-center text-[10px] text-gray-500 text-center">
                  QR Code
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-poppins font-bold text-[15px] text-[#2C333A] uppercase">
              Klantenservice
            </h4>
            <ul className="flex flex-col gap-3 font-poppins text-[13px] text-[#8597AB]">
              <li>
                <a href="#" className="hover:text-primary">
                  Over ons
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Algemene Voorwaarden
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Betaalmethoden
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Privacy en veiligheid
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Veelgestelde Vragen (FAQ)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Verzenden & retourneren
                </a>
              </li>
            </ul>
            <button className="mt-4 bg-[#0090C1] hover:bg-primary text-white font-poppins text-base py-2.5 px-6 rounded w-fit transition-colors">
              Storing melden
            </button>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-poppins font-bold text-[15px] text-[#2C333A] uppercase">
              Onze merken
            </h4>
            <ul className="flex flex-col gap-3 font-poppins text-[13px] text-[#8597AB]">
              <li>
                <a href="#" className="hover:text-primary">
                  All Brands
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Bartscher
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  CombiSteel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Diamond
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  EMGA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  HENDI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Luxus
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Mastro
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Maxima
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Olympia
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Tefcold
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-poppins font-bold text-[15px] text-[#2C333A] uppercase">
              Populaire categorieën
            </h4>
            <ul className="flex flex-col gap-3 font-poppins text-[13px] text-[#8597AB]">
              <li>
                <a href="#" className="hover:text-primary">
                  Koeltoonbanken
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Koelcellen | Vriescellen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Koelkasten Horeca
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Espressomachines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Wandkoelingen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Koelwerkbanken
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  IJsblokjesmachines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Barkoelkasten
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Horeca vaatwassers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Afzuigkappen met motor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Heteluchtovens
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Fornuizen Horeca
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-poppins font-bold text-[15px] text-[#2C333A] uppercase">
                Mijn account
              </h4>
              <ul className="flex flex-col gap-3 font-poppins text-[13px] text-[#8597AB]">
                <li>
                  <a href="#" className="hover:text-primary">
                    Account informatie
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Mijn bestellingen
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Mijn tickets
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Nieuwsbrieven
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-poppins font-bold text-[15px] text-[#2C333A] uppercase">
                Contact
              </h4>
              <ul className="flex flex-col gap-1 font-poppins text-[13px] text-[#2C333A]">
                <li>HorecaGemak B.V.</li>
                <li>Showroom Delft</li>
                <li>Schieweg 77</li>
                <li>2627 AT Delft</li>
                <li className="mt-2">KvK 75633906</li>
                <li>BTW NL860346663B01</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-poppins font-bold text-[15px] text-[#2C333A] uppercase">
                Betaalmethoden
              </h4>
              <div className="flex flex-wrap gap-2">
                {/* Payment Method Icons Placeholder */}
                <div className="h-8 w-12 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500">
                  iDEAL
                </div>
                <div className="h-8 w-12 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500">
                  Bancontact
                </div>
                <div className="h-8 w-12 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500">
                  Visa
                </div>
                <div className="h-8 w-12 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500">
                  Mastercard
                </div>
                <div className="h-8 w-12 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500">
                  PayPal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#CECECE] py-4">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
          <p className="font-poppins text-xs text-[#333333]">
            © 2026 Horecagemak All Rights Reserved gebruik van deze site
            betekent dat je onze algemene voorwaarden accepteert.
          </p>
        </div>
      </div>
    </footer>);

}