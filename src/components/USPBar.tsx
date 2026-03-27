import React from 'react';
import { Truck, CreditCard, Clock, Tag, Package } from 'lucide-react';
export function USPBar() {
  return (
    <div className="w-full flex justify-center border-b border-gray-100 bg-white py-2">
      <div className="w-full max-w-[1440px] px-4 md:px-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-accent" />
          <span className="text-primary font-poppins text-xs md:text-sm">
            Gratis verzending v.a €75
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-accent" />
          <span className="text-primary font-poppins text-xs md:text-sm">
            Ook achteraf betalen
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-accent" />
          <span className="text-primary font-poppins text-xs md:text-sm">
            Same day delivery mogelijk!
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-accent" />
          <span className="text-primary font-poppins text-xs md:text-sm">
            Altijd de laagste prijs
          </span>
        </div>
        <div className="flex items-center gap-2 hidden lg:flex">
          <Package className="w-4 h-4 text-accent" />
          <span className="text-primary font-poppins text-xs md:text-sm">
            100.000+ producten
          </span>
        </div>
      </div>
    </div>);

}