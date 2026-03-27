import React from 'react';
import { ProductCard } from './ProductCard';
export function ProductGrid() {
  return (
    <div className="flex-1 flex flex-col w-full">
      {/* Header & Sort */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <h1 className="font-montserrat font-bold text-2xl md:text-[26px] text-primary">
          Koeltoonbanken | Koeltogen
        </h1>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-montserrat font-semibold text-primary">
              Sorteer op
            </span>
            <select className="border border-gray-300 rounded px-3 py-1.5 font-poppins text-sm text-gray-700 outline-none focus:border-primary">
              <option>Laagste prijs</option>
              <option>Hoogste prijs</option>
              <option>Nieuwste</option>
              <option>Meest verkocht</option>
            </select>
          </div>

          {/* Pagination Top */}
          <div className="hidden lg:flex items-center gap-1">
            <button className="w-8 h-8 rounded border border-primary bg-[#0071CE] text-white flex items-center justify-center font-poppins text-sm">
              1
            </button>
            <button className="w-8 h-8 rounded border border-gray-200 bg-white text-primary hover:bg-gray-50 flex items-center justify-center font-poppins text-sm">
              2
            </button>
            <button className="w-8 h-8 rounded border border-gray-200 bg-white text-primary hover:bg-gray-50 flex items-center justify-center font-poppins text-sm">
              3
            </button>
            <span className="w-8 h-8 flex items-center justify-center font-poppins font-bold tracking-widest text-gray-500">
              ...
            </span>
            <button className="w-8 h-8 rounded border border-gray-200 bg-white text-primary hover:bg-gray-50 flex items-center justify-center font-poppins text-sm">
              15
            </button>
            <button className="px-3 h-8 rounded border border-gray-200 bg-white text-primary hover:bg-gray-50 flex items-center justify-center font-poppins text-sm">
              Volgende
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 border-t border-gray-100 pt-6">
        <ProductCard
          image="https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=400&h=400"
          title="Koeltoonbank | 2 Schuifdeuren | 175 Liter Capaciteit | GN | 0.2kW (230V) | 915x890x1080(h)mm"
          brand="Maxima"
          inStock={true}
          deliveryTime="2-5 dagen"
          warranty="2 jaar"
          sku="MAX-9400820"
          oldPrice="1.700"
          price="1.271" />
        
        <ProductCard
          image="https://images.unsplash.com/photo-1584269600519-112d071b4d16?auto=format&fit=crop&q=80&w=400&h=400"
          title="Koeltoonbank | 2 Schuifdeuren | 269 Liter Capaciteit | GN | 0.2kW (230V) | 1250x890x1080(h)mm"
          brand="Maxima"
          inStock={true}
          deliveryTime="2-5 dagen"
          warranty="2 jaar"
          sku="MAX-9400821"
          oldPrice="1.730"
          price="1.279" />
        
        <ProductCard
          image="https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=400&h=400"
          title="Koeltoonbank | SUPER PLUS | +4°C/+6°C | Statisch | Zelfbediening | Optioneel Onderstel | 1000x930x345(h)mm"
          brand="Diamond"
          inStock={true}
          deliveryTime="1-2 dagen"
          warranty="1 jaar"
          sku="DIA-SUP10-ZS/R2"
          oldPrice="1.716"
          price="1.287" />
        
        <ProductCard
          image="https://images.unsplash.com/photo-1584269600519-112d071b4d16?auto=format&fit=crop&q=80&w=400&h=400"
          title="Viskoeltoonbank | -5°C | Plaatkoeling | Wielen | 1000x920x1180(h)mm"
          brand="CombiSteel"
          inStock={false}
          deliveryTime="Onbekend"
          warranty="2 jaar"
          sku="COM-7083.0005"
          oldPrice="1.948"
          price="1.403" />
        
        <ProductCard
          image="https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=400&h=400"
          title="Koeltoonbank | SUPER PLUS | +4°C/+6°C | Statisch | Zelfbediening | Optioneel Onderstel | 1500x930x345(h)mm"
          brand="Diamond"
          inStock={true}
          deliveryTime="1-2 dagen"
          warranty="1 jaar"
          sku="DIA-SUP15-ZS/R2"
          oldPrice="2.001"
          price="1.524" />
        
        <ProductCard
          image="https://images.unsplash.com/photo-1584269600519-112d071b4d16?auto=format&fit=crop&q=80&w=400&h=400"
          title="Koeltoonbank | SUPER PLUS | +4°C/+6°C | Statisch | Optioneel Onderstel | 1000x930x660(h)mm"
          brand="Diamond"
          inStock={true}
          deliveryTime="1-2 dagen"
          warranty="1 jaar"
          sku="DIA-SUP10-ZD/R2"
          oldPrice="2.031"
          price="1.578" />
        
        <ProductCard
          image="https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=400&h=400"
          title="Koeltoonbank | SUPER PLUS | +4°C/+6°C | Statisch | Optioneel Onderstel | 1000x930x660(h)mm"
          brand="Diamond"
          inStock={true}
          deliveryTime="1-2 dagen"
          warranty="1 jaar"
          sku="DIA-SUP10-ZC/R2"
          oldPrice="2.104"
          price="1.678" />
        
        <ProductCard
          image="https://images.unsplash.com/photo-1584269600519-112d071b4d16?auto=format&fit=crop&q=80&w=400&h=400"
          title="Viskoeltoonbank | G-SERIE | +2°C/+12°C | Statisch | 915x890x560(h)mm"
          brand="Polar"
          inStock={true}
          deliveryTime="1-3 dagen"
          warranty="2 jaar"
          sku="GAS-GE960"
          price="1.639,99" />
        
      </div>

      {/* Pagination Bottom */}
      <div className="flex justify-center mt-12 mb-8">
        <div className="flex items-center gap-1">
          <button className="w-9 h-9 rounded border border-primary bg-[#0071CE] text-white flex items-center justify-center font-poppins text-sm">
            1
          </button>
          <button className="w-9 h-9 rounded border border-gray-200 bg-white text-primary hover:bg-gray-50 flex items-center justify-center font-poppins text-sm">
            2
          </button>
          <button className="w-9 h-9 rounded border border-gray-200 bg-white text-primary hover:bg-gray-50 flex items-center justify-center font-poppins text-sm">
            3
          </button>
          <span className="w-9 h-9 flex items-center justify-center font-poppins font-bold tracking-widest text-gray-500">
            ...
          </span>
          <button className="w-9 h-9 rounded border border-gray-200 bg-white text-primary hover:bg-gray-50 flex items-center justify-center font-poppins text-sm">
            15
          </button>
          <button className="px-4 h-9 rounded border border-gray-200 bg-white text-primary hover:bg-gray-50 flex items-center justify-center font-poppins text-sm gap-2">
            Volgende
            <span className="text-lg leading-none">›</span>
          </button>
        </div>
      </div>
    </div>);

}