"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    image: "/static/images/slide1.jpg",
    alt: "Bezpieczeństwo w pracy",
    title: "Profesjonalne usługi BHP",
    description:
      "Zapewniamy kompleksowe rozwiązania w zakresie bezpieczeństwa i higieny pracy.",
  },
  {
    id: 2,
    image: "/static/images/slide2.jpg",
    alt: "Szkolenia BHP",
    title: "Szkolenia i doradztwo",
    description:
      "Oferujemy specjalistyczne szkolenia i doradztwo w zakresie BHP.",
  },
  {
    id: 3,
    image: "/static/images/slide3.jpg",
    alt: "Audyty bezpieczeństwa",
    title: "Audyty i ocena ryzyka",
    description:
      "Przeprowadzamy kompleksowe audyty i oceny ryzyka w miejscu pracy.",
  },
];

export default function MainSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    className: "w-full",
  };

  return (
    <section
      id="main"
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="w-full">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-[80vh] w-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-francker-regular text-center">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-center max-w-4xl font-francker-light">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
