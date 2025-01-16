"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin } from "lucide-react";
import { sendEmail } from "../actions/sendEmail";

const schema = z.object({
  name: z
    .string()
    .min(2, "Imię musi mieć co najmniej 2 znaki")
    .max(50, "Imię nie może przekraczać 50 znaków"),
  email: z.string().email("Nieprawidłowy adres email"),
  message: z
    .string()
    .min(10, "Wiadomość musi mieć co najmniej 10 znaków")
    .max(1000, "Wiadomość nie może przekraczać 1000 znaków"),
});

type FormData = z.infer<typeof schema>;

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    error?: string;
  } | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    const result = await sendEmail(formData);
    setFormStatus(result);
    if (result.success) {
      reset();
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-francker-regular">
          Skontaktuj się z nami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 font-francker-regular">
              Dane kontaktowe
            </h3>
            <ul className="space-y-4 font-francker-light">
              <li className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-orange-500" />
                <span>+48 762 853 562</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-orange-500" />
                <a
                  href="mailto:kontakt@strefabhp.pl"
                  className="hover:text-orange-500 transition-colors"
                >
                  strefabhp.biuro@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-orange-500" />
                <span>ul. Gościnna 3/2, 88-400 Żnin</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 font-francker-regular">
              Formularz kontaktowy
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 font-francker-light"
                >
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white font-francker-light"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 font-francker-light"
                >
                  Adres e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white font-francker-light"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 font-francker-light"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white font-francker-light"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              {/* Honeypot field */}
              <div className="hidden">
                <input
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors font-francker-regular"
              >
                Wyślij
              </button>
              {formStatus && (
                <div
                  className={`mt-4 p-4 rounded ${
                    formStatus.success ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {formStatus.success
                    ? "Wiadomość została wysłana!"
                    : formStatus.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
