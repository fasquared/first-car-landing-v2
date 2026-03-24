"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { SITE_CONTENT } from "@/config/settings";

export function Footer() {
  return (
    <footer id="contacts" className="bg-zinc-950 pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Левая колонка */}
          <div className="flex flex-col gap-10">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/logo.png" 
                alt="FIRST CAR" 
                width={200}
                height={50}
                className="h-8 md:h-10 w-auto brightness-0 invert"
                priority
              />
            </Link>
            
            <div className="flex flex-col gap-6 text-lg text-zinc-300">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary-container shrink-0 mt-1" />
                <span>{SITE_CONTENT.CONTACTS.ADDRESS}<br/><span className="text-zinc-500 text-sm">{SITE_CONTENT.CONTACTS.ADDRESS_OFFICE}</span></span>
              </div>
              
              <a href={`tel:${SITE_CONTENT.CONTACTS.PHONE_HREF}`} className="flex items-center gap-4 hover:text-white transition-colors group">
                <Phone className="w-6 h-6 text-primary-container shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-headline tracking-wide">{SITE_CONTENT.CONTACTS.PHONE}</span>
              </a>
              
              <a href={`mailto:${SITE_CONTENT.CONTACTS.EMAIL}`} className="flex items-center gap-4 hover:text-white transition-colors group">
                <Mail className="w-6 h-6 text-primary-container shrink-0 group-hover:scale-110 transition-transform" />
                <span>{SITE_CONTENT.CONTACTS.EMAIL}</span>
              </a>
              
              <a href={SITE_CONTENT.CONTACTS.TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white transition-colors group">
                <Send className="w-6 h-6 text-primary-container shrink-0 group-hover:scale-110 transition-transform" />
                <span>{SITE_CONTENT.CONTACTS.TELEGRAM_HANDLE}</span>
              </a>
            </div>
          </div>

          {/* Правая колонка: Яндекс Карты */}
          <div className="w-full h-[350px] lg:h-full min-h-[350px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 relative bg-zinc-900 flex items-center justify-center">
            {/* Загрузочный фон на случай долгой загрузки iframe */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <span className="text-zinc-500 text-sm">Загрузка карты...</span>
            </div>
            
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=37.625447%2C55.698379&z=16&pt=37.625447%2C55.698379,pm2gnm" 
              width="100%" 
              height="100%" 
              allowFullScreen={true} 
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }} 
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

        {/* Нижний блок */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-zinc-500">
          <div className="text-center md:text-left flex flex-col md:flex-row md:gap-2">
            <span>{SITE_CONTENT.LEGAL.INDIVIDUAL_NAME}</span>
            <span className="hidden md:inline text-zinc-700">|</span>
            <span>ОГРНИП: {SITE_CONTENT.LEGAL.OGRNIP}</span>
          </div>
          
          <Link href={SITE_CONTENT.POLICY_URL} target="_blank" className="hover:text-zinc-300 transition-colors underline underline-offset-4">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
