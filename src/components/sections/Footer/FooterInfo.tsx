import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { SITE_CONTENT } from "@/config/settings";

export const FooterInfo = React.memo(() => (
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
        <span>
          {SITE_CONTENT.CONTACTS.ADDRESS}
          <br/>
          <span className="text-zinc-500 text-sm">{SITE_CONTENT.CONTACTS.ADDRESS_OFFICE}</span>
        </span>
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
));

FooterInfo.displayName = "FooterInfo";
