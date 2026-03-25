"use client";

import React from "react";
import { FooterInfo } from "./FooterInfo";
import { FooterMap } from "./FooterMap";
import { FooterLegal } from "./FooterLegal";

export const Footer = React.memo(() => {
  return (
    <footer id="contacts" className="bg-zinc-950 pt-16 md:pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <FooterInfo />
          <FooterMap />
        </div>
        <FooterLegal />
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

