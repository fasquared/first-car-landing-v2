import React from "react";
import Link from "next/link";
import { SITE_CONTENT } from "@/config/settings";

export const FooterLegal = React.memo(() => (
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
));

FooterLegal.displayName = "FooterLegal";
