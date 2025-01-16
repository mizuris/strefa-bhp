import { CheckCircle } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Szkolenia BHP",
    description:
      "Kompleksowe szkolenia z zakresu bezpieczeństwa i higieny pracy dla pracowników i kadry zarządzającej.",
  },
  {
    id: 2,
    title: "Audyty bezpieczeństwa",
    description:
      "Przeprowadzamy szczegółowe audyty bezpieczeństwa w miejscu pracy, identyfikując potencjalne zagrożenia.",
  },
  {
    id: 3,
    title: "Ocena ryzyka zawodowego",
    description:
      "Profesjonalna ocena ryzyka zawodowego na stanowiskach pracy, zgodnie z obowiązującymi przepisami.",
  },
  {
    id: 4,
    title: "Doradztwo BHP",
    description:
      "Eksperckie doradztwo w zakresie BHP, pomagające w dostosowaniu firmy do wymogów prawnych.",
  },
  {
    id: 5,
    title: "Outsourcing służby BHP",
    description:
      "Pełna obsługa BHP dla firm, zapewniająca zgodność z przepisami i spokój umysłu.",
  },
  {
    id: 6,
    title: "Dokumentacja BHP",
    description:
      "Przygotowanie i aktualizacja kompleksowej dokumentacji BHP wymaganej przez prawo.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nasze Usługi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CheckCircle className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
