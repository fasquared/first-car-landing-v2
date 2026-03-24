"use client";

import { useState, useEffect } from "react";

// Хук отслеживает активную секцию через IntersectionObserver
export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");
  // Стабилизируем массив идентификаторов через сериализацию, чтобы избежать
  // бесконечного пересоздания наблюдателей при каждом ререндере родителя
  const serialized = sectionIds.join(",");

  useEffect(() => {
    const ids = serialized.split(",");
    const observers = ids.map((id) => {
      const element = document.getElementById(id.replace("#", ""));
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${id.replace("#", "")}`);
            }
          });
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [serialized]); // безопасная примитивная зависимость

  return activeSection;
}
