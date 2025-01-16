type Section = {
  title: string;
  link: string;
};

type SectionName = "main" | "services" | "contact";

export const sections: Record<SectionName, Section> = {
  main: {
    title: "Główna",
    link: "#main",
  },
  services: {
    title: "Usługi",
    link: "#services",
  },
  contact: {
    title: "Kontakt",
    link: "#contact",
  },
};
