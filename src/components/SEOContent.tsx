import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
interface FAQItemProps {
  question: string;
  answer: string;
}
function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}>
        
        <h4 className="font-montserrat font-semibold text-[17px] text-primary pr-4">
          {question}
        </h4>
        <span className="text-accent font-bold text-xl flex-shrink-0">
          {isOpen ?
          <ChevronUp className="w-5 h-5" /> :

          <ChevronDown className="w-5 h-5" />
          }
        </span>
      </button>
      {isOpen &&
      <div className="mt-3 font-poppins text-[15px] text-gray-800 leading-relaxed">
          {answer}
        </div>
      }
    </div>);

}
export function SEOContent() {
  return (
    <div className="w-full mt-12 mb-16">
      {/* SEO Text Block */}
      <div className="relative mb-12">
        <h2 className="font-montserrat font-semibold text-3xl text-primary mb-4">
          Koeltoonbank voor de horeca kopen? Hier moet u op letten
        </h2>
        <div className="font-poppins text-sm text-gray-800 leading-relaxed max-h-[140px] overflow-hidden relative">
          <p className="mb-4">
            Bent u op zoek naar een nieuwe koeltoonbank (of: koeltoog) voor uw
            winkel? Kies de juiste voor uw situatie. Om die in kaart te brengen,
            beantwoordt u deze vragen:
          </p>
          <p>
            1. Op welke temperatuur moet de koeling koelen?
            <br />
            2. Heeft u een koeltoonbank met plaatkoeling nodig?
            <br />
            3. Welke afmetingen...
          </p>
          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <button className="font-poppins font-bold text-base text-primary mt-2 hover:underline">
          + Lees meer
        </button>
      </div>

      {/* FAQ Section */}
      <div>
        <h3 className="font-montserrat font-semibold text-xl text-primary mb-6">
          Meest gestelde vragen
        </h3>
        <div className="flex flex-col">
          <FAQItem
            question="Wat is een koeltoog en waar wordt het voor gebruikt?"
            answer="Een koeltoog is een gekoelde vitrine die wordt gebruikt om etenswaren zoals salades, sandwiches, dranken en andere gekoelde producten te presenteren. Het wordt vaak gebruikt in supermarkten, delicatessenzaken, bakkerijen en andere voedingswinkels." />
          
          <FAQItem
            question="Welke soorten koeltoog zijn er beschikbaar?"
            answer="Koeltoogmodellen variëren in grootte, ontwerp en koelsystemen. Er zijn togen met rechte glazen, gebogen glazen, open koelsystemen en modellen met schuifdeuren." />
          
          <FAQItem
            question="Hoe kies ik de juiste maat koeltoog voor mijn zaak?"
            answer="Overweeg de beschikbare ruimte in je winkel, het assortiment producten dat je wilt presenteren en de verkoopbehoefte. Kies een koeltoog die past bij de lay-out en de behoeften van je bedrijf." />
          
          <FAQItem
            question="Wat is het ideale temperatuurbereik voor een koeltoog?"
            answer="Het ideale temperatuurbereik voor een koeltoog ligt meestal tussen 2 en 4 graden Celsius om de versheid van de producten te behouden." />
          
          <FAQItem
            question="Hoe onderhoud ik mijn koeltoog?"
            answer="Regelmatig onderhoud is belangrijk. Reinig de koeltoog regelmatig, controleer de koeltechnologie en zorg ervoor dat de glazen schoon zijn voor een optimale presentatie." />
          
          <FAQItem
            question="Zijn er energiebesparende opties beschikbaar voor koeltogen?"
            answer="Ja, sommige koeltoogmodellen zijn uitgerust met energiezuinige kenmerken, zoals LED-verlichting en efficiënte koelsystemen. Kies een model dat voldoet aan je energie-efficiëntiebehoeften." />
          
          <FAQItem
            question="Wat moet ik doen als mijn koeltoog een storing heeft?"
            answer="Raadpleeg de handleiding voor probleemoplossing. Als de storing aanhoudt, neem dan contact op met de leverancier of een professionele monteur voor reparatie." />
          
          <FAQItem
            question="Mag ik zelf de installatie van mijn koeltoog doen?"
            answer="Hoewel het in principe mogelijk is om de installatie zelf te doen, wordt het aanbevolen om dit over te laten aan professionele technici om ervoor te zorgen dat alles correct is geconfigureerd en voldoet aan alle veiligheidsnormen." />
          
          <FAQItem
            question="Welke soorten producten zijn geschikt voor een koeltoog?"
            answer="Koeltoogmodellen zijn geschikt voor een verscheidenheid aan producten, waaronder verse salades, sandwiches, zuivelproducten, gebak en andere gekoelde levensmiddelen. Zorg ervoor dat de producten goed zichtbaar zijn." />
          
          <FAQItem
            question="Kan ik mijn koeltoog aanpassen aan mijn merk en winkelthema?"
            answer="Ja, sommige fabrikanten bieden de mogelijkheid om koeltoogmodellen aan te passen met logo's, kleuren en brandingelementen die passen bij de identiteit van je zaak. Informeer bij de leverancier naar de mogelijkheden." />
          
        </div>
      </div>
    </div>);

}