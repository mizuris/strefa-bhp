import "./globals.css";
import localFont from "next/font/local";
import Header from "./components/Header";
import Footer from "./components/Footer";

const FranckerRegular = localFont({
  src: "./assets/fonts/Francker W06 Condensed Regular.ttf",
  variable: "--font-francker-regular",
});

const FranckerLight = localFont({
  src: "./assets/fonts/Francker W06 Condensed X Light.ttf",
  variable: "--font-francker-light",
});

export const metadata = {
  title: "Strefa BHP - Profesjonalne Usługi BHP",
  description:
    "Oferujemy kompleksowe usługi w zakresie bezpieczeństwa i higieny pracy. Skontaktuj się z nami już dziś!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      className={`scroll-smooth ${FranckerRegular.variable} ${FranckerLight.variable}`}
    >
      <body className="bg-white text-gray-900 font-francker-regular">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
