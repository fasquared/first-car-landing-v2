"use client";

import { useState, useTransition } from "react";
import { Button } from "../ui/Button";
import { submitForm } from "@/app/actions";

interface CalculateCostFormProps {
  onSuccess?: () => void;
}

export function CalculateCostForm({ onSuccess }: CalculateCostFormProps) {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 1) return digits ? "+" + digits : "";
    if (digits.length <= 2) return `+${digits.slice(0, 1)} (${digits.slice(1)}`;
    if (digits.length <= 5) return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4)}`;
    if (digits.length <= 8) return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    formData.append("formType", "Расчет стоимости");

    startTransition(async () => {
      const result = await submitForm(formData);
      
      if (result.success) {
        setIsSuccess(true);
        if (onSuccess) {
          setTimeout(onSuccess, 3000);
        }
      } else {
        setError(result.error || "Ошибка при отправке. Попробуйте еще раз.");
      }
    });
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-primary-container/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(3,253,0,0.4)]">
          <span className="material-symbols-outlined text-4xl text-primary-container">check_circle</span>
        </div>
        <h3 className="text-2xl font-headline font-bold text-white mb-3">Заявка принята!</h3>
        <p className="text-zinc-400 max-w-[280px] mx-auto leading-relaxed">
          Спасибо. Мы рассчитаем актуальную стоимость и свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <div className="py-2">
      <h3 className="text-3xl md:text-4xl font-headline font-black text-white mb-2 leading-[1.05]">
        Рассчитать <br className="md:hidden" /><span className="text-primary-container">стоимость</span>
      </h3>
      <p className="text-zinc-400 mb-8 text-sm md:text-base leading-relaxed">
        Оставьте свои контакты, и наш специалист перезвонит вам для уточнения деталей и комплектации.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-300 ml-1">
            Ваше имя
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors text-white placeholder-zinc-600 font-medium"
            placeholder="Иван Иванов"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-zinc-300 ml-1">
            Телефон
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            onChange={(e) => e.target.value = formatPhone(e.target.value)}
            className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors text-white placeholder-zinc-600 font-medium"
            placeholder="+7 (999) 000-00-00"
          />
        </div>

        <div className="pt-2">
          <Button 
            type="submit" 
            className="w-full"
            size="lg"
            disabled={isPending}
          >
            {isPending ? "Отправка..." : "Оставить заявку"}
          </Button>
          {error && <p className="text-xs text-error-container text-center mt-2 uppercase font-bold">{error}</p>}
          <p className="text-xs text-zinc-500 text-center mt-4">
            Нажимая на кнопку, вы соглашаетесь с <a href="https://docs.google.com/document/d/1yfMFwWQbmoWtxlHvAslXqTjFKo57oH4QpfgfXAXJh5M/edit?tab=t.0" target="_blank" className="underline hover:text-white transition-colors">политикой конфиденциальности</a>.
          </p>
        </div>
      </form>
    </div>
  );
}
