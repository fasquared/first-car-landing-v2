import React from "react";

export const FooterMap = React.memo(() => (
  <div className="w-full h-[350px] lg:h-full min-h-[350px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 relative bg-zinc-900 flex items-center justify-center">
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
));

FooterMap.displayName = "FooterMap";
