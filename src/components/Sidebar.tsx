import React from 'react';
import { Check } from 'lucide-react';
interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}
function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <div className="py-4 border-b border-borderLight">
      <h3 className="font-montserrat font-bold text-body text-base mb-3">
        {title}
      </h3>
      {children}
    </div>);

}
interface CheckboxItemProps {
  label: string;
  count?: number;
  checked?: boolean;
}
function CheckboxItem({ label, count, checked = false }: CheckboxItemProps) {
  return (
    <label className="flex items-start gap-3 py-1.5 cursor-pointer group">
      <div
        className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-colors ${checked ? 'bg-accent' : 'bg-gray-200 group-hover:bg-gray-300'}`}>
        
        {checked && <Check className="w-3 h-3 text-white" />}
      </div>
      <span className="font-poppins text-sm text-gray-700 leading-snug">
        {label}{' '}
        {count !== undefined &&
        <span className="text-gray-500">({count})</span>
        }
      </span>
    </label>);

}
export function Sidebar() {
  return (
    <aside className="w-full lg:w-[268px] flex-shrink-0 pr-0 lg:pr-6 border-r-0 lg:border-r border-borderLight">
      {/* Price Filter */}
      <FilterSection title="Prijs">
        <div className="mb-6 px-2">
          {/* Custom Range Slider Track Mockup */}
          <div className="h-1.5 bg-gray-300 rounded-full relative mt-4 mb-6">
            <div className="absolute left-0 right-1/4 h-full bg-accent rounded-full"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-accent border-2 border-white rounded-full shadow cursor-pointer"></div>
            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-accent border-2 border-white rounded-full shadow cursor-pointer"></div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center border border-gray-300 rounded overflow-hidden w-full">
              <div className="bg-gray-100 px-2 py-1.5 text-gray-600 font-poppins text-sm border-r border-gray-300">
                €
              </div>
              <input
                type="text"
                value="0"
                readOnly
                className="w-full px-2 py-1.5 text-sm font-poppins outline-none" />
              
            </div>
            <span className="text-gray-400">-</span>
            <div className="flex items-center border border-gray-300 rounded overflow-hidden w-full">
              <div className="bg-gray-100 px-2 py-1.5 text-gray-600 font-poppins text-sm border-r border-gray-300">
                €
              </div>
              <input
                type="text"
                value="15000"
                readOnly
                className="w-full px-2 py-1.5 text-sm font-poppins outline-none" />
              
            </div>
          </div>
        </div>
      </FilterSection>

      {/* Brands Filter */}
      <FilterSection title="Merken">
        <div className="flex flex-col gap-0.5">
          <CheckboxItem label="Alle merken" checked />
          <CheckboxItem label="Arneg" />
          <CheckboxItem label="CombiSteel" />
          <CheckboxItem label="Coreco" />
          <CheckboxItem label="Diamond" />
          <button className="text-primary font-poppins text-sm text-left mt-2 hover:underline flex items-center gap-1">
            <span className="text-lg leading-none">+</span> Toon meer
          </button>
        </div>
      </FilterSection>

      {/* Width Filter */}
      <FilterSection title="Breedte">
        <div className="flex flex-col gap-0.5">
          <CheckboxItem label="601 t/m 700 mm" count={2} />
          <CheckboxItem label="901 t/m 1000 mm" count={34} />
          <CheckboxItem label="1001 t/m 1500 mm" count={111} />
          <CheckboxItem label="1501 t/m 1800 mm" count={33} />
          <CheckboxItem label="1801 t/m 2000 mm" count={74} />
        </div>
      </FilterSection>

      {/* Depth Filter */}
      <FilterSection title="Diepte">
        <div className="flex flex-col gap-0.5">
          <CheckboxItem label="701 t/m 800 mm" count={22} />
          <CheckboxItem label="801 t/m 900 mm" count={38} />
          <CheckboxItem label="901 t/m 1000 mm" count={13} />
          <CheckboxItem label="1001 t/m 1500 mm" count={141} />
        </div>
      </FilterSection>

      {/* Height Filter */}
      <FilterSection title="Hoogte">
        <div className="flex flex-col gap-0.5">
          <CheckboxItem label="301 t/m 400 mm" count={6} />
          <CheckboxItem label="501 t/m 600 mm" count={3} />
          <CheckboxItem label="601 t/m 700 mm" count={5} />
          <CheckboxItem label="801 t/m 900 mm" count={20} />
        </div>
      </FilterSection>

      {/* Execution Filter */}
      <FilterSection title="Uitvoering">
        <div className="flex flex-col gap-0.5">
          <CheckboxItem label="Gebogen Glas" count={114} />
          <CheckboxItem label="Recht Glas" count={209} />
          <CheckboxItem label="Zelfbediening" count={37} />
        </div>
      </FilterSection>

      {/* Categories Menu */}
      <div className="py-6">
        <h3 className="font-montserrat font-bold text-body text-base mb-4">
          Categorieën
        </h3>
        <ul className="font-poppins text-sm text-gray-800 flex flex-col gap-3">
          <li className="font-semibold">Keukenapparatuur</li>
          <li className="font-semibold">Koelen & Vriezen</li>
          <li>
            <ul className="pl-4 border-l-2 border-gray-200 flex flex-col gap-3 ml-2">
              <li className="hover:text-primary cursor-pointer">
                Koelcellen | Vriescellen
              </li>
              <li className="hover:text-primary cursor-pointer">
                Koelkasten Horeca
              </li>
              <li className="hover:text-primary cursor-pointer">Vrieskasten</li>
              <li>
                <span className="text-accent font-semibold cursor-pointer">
                  Koeltoonbanken
                </span>
                <ul className="pl-4 border-l-2 border-gray-200 flex flex-col gap-3 mt-3 ml-2">
                  <li className="text-accent font-semibold cursor-pointer">
                    Koeltoonbanken | Koeltogen
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Viskoeltoonbanken | Viskoeltogen
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Neutrale Toonbanken
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Koeltoonbanken Toebehoren
                  </li>
                </ul>
              </li>
              <li className="hover:text-primary cursor-pointer">
                Koelwerkbanken
              </li>
              <li className="hover:text-primary cursor-pointer">Saladettes</li>
              <li className="hover:text-primary cursor-pointer">Vrieskisten</li>
            </ul>
          </li>
          <li className="font-semibold mt-2">Klein Materiaal</li>
          <li className="font-semibold">Warmhouden</li>
          <li className="font-semibold">Hygiëne & Vaatwassers</li>
          <li className="font-semibold">Presentatie</li>
          <li className="font-semibold">Afzuiging</li>
          <li className="font-semibold">RVS</li>
          <li className="font-semibold">Overig</li>
        </ul>
      </div>
    </aside>);

}