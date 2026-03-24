"use client";

import { useState, useTransition } from "react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { submitForm } from "@/app/actions";
import { SITE_CONTENT } from "@/config/settings";

interface QuestionsFormProps {
  onSuccess?: () => void;
}

export function QuestionsForm({ onSuccess }: QuestionsFormProps) {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; root?: string }>({});

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 1) return digits ? "+" + digits : "";
    if (digits.length <= 2) return `+${digits.slice(0, 1)} (${digits.slice(1)}`;
    if (digits.length <= 5) return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4)}`;
    if (digits.length <= 8) return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;

    const newErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) newErrors.name = "Введите имя";
    if (phone.length < 18) newErrors.phone = "Введите полный номер";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    
    startTransition(async () => {
      const result = await submitForm(formData);
      
      if (result.success) {
        setIsSuccess(true);
        if (onSuccess) {
          setTimeout(onSuccess, 3000);
        }
      } else {
        setErrors({ root: result.error || "Ошибка при отправке. Попробуйте еще раз." });
      }
    });
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 px-6 bg-surface-container-high/40 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl">
        <div className="w-20 h-20 bg-primary-container/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(3,253,0,0.4)]">
          <span className="material-symbols-outlined text-5xl text-primary-container">check_circle</span>
        </div>
        <h3 className="text-3xl font-headline font-black text-white mb-4 uppercase tracking-tight">Заявка принята!</h3>
        <p className="text-zinc-400 max-w-[320px] mx-auto leading-relaxed text-lg">
          Спасибо за интерес. Мы свяжемся с вами в ближайшее время для согласования времени презентации.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8 md:p-10 bg-zinc-950/60 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl flex flex-col justify-center transition-all duration-300 hover:border-white/20 relative overflow-hidden group">
      {/* Subtle Accent Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-container/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">
            Ваше имя
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={cn(
              "w-full bg-black/40 border rounded-2xl px-6 py-4 focus:outline-none transition-all text-white placeholder-zinc-700 font-medium",
              errors.name ? "border-error-container" : "border-white/10 focus:border-primary-container focus:ring-1 focus:ring-primary-container"
            )}
            placeholder="Иван Иванов"
          />
          {errors.name && <p className="text-[10px] text-error-container uppercase tracking-widest font-bold ml-1">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">
            Телефон
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            onChange={(e) => e.target.value = formatPhone(e.target.value)}
            className={cn(
              "w-full bg-black/40 border rounded-2xl px-6 py-4 focus:outline-none transition-all text-white placeholder-zinc-700 font-medium",
              errors.phone ? "border-error-container" : "border-white/10 focus:border-primary-container focus:ring-1 focus:ring-primary-container"
            )}
            placeholder="+7 (999) 000-00-00"
          />
          {errors.phone && <p className="text-[10px] text-error-container uppercase tracking-widest font-bold ml-1">{errors.phone}</p>}
        </div>

        <div className="pt-4">
          <Button 
            type="submit" 
            className="w-full"
            variant="primary"
            size="lg"
            disabled={isPending}
          >
            {isPending ? "Отправка..." : "ЗАПИСАТЬСЯ"}
          </Button>
          {errors.root && <p className="text-xs text-error-container text-center mt-2 uppercase font-bold">{errors.root}</p>}
          <p className="text-[10px] text-zinc-600 text-center mt-6 uppercase tracking-widest leading-relaxed">
            Нажимая на кнопку, вы соглашаетесь с <br />
            <a href={SITE_CONTENT.POLICY_URL} target="_blank" className="underline hover:text-white transition-colors">политикой конфиденциальности</a>
          </p>
        </div>
      </form>
    </div>
  );
}
