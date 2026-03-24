"use client";

import React from "react"
import { CardCarousel } from "./CardCarousel"
import { Button } from "@/components/ui/Button"

import { useModal } from "@/components/providers/ModalProvider"

const reviewImages = [
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.13.15.png", alt: "Скриншот отзыва клиента 1" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.13.21.png", alt: "Скриншот отзыва клиента 2" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.13.26.png", alt: "Скриншот отзыва клиента 3" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.13.31.png", alt: "Скриншот отзыва клиента 4" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.13.35.png", alt: "Скриншот отзыва клиента 5" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.13.45.png", alt: "Скриншот отзыва клиента 6" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.13.52.png", alt: "Скриншот отзыва клиента 7" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.13.57.png", alt: "Скриншот отзыва клиента 8" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.14.03.png", alt: "Скриншот отзыва клиента 9" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.14.07.png", alt: "Скриншот отзыва клиента 10" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.14.13.png", alt: "Скриншот отзыва клиента 11" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.14.19.png", alt: "Скриншот отзыва клиента 12" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.14.42.png", alt: "Скриншот отзыва клиента 13" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.14.47.png", alt: "Скриншот отзыва клиента 14" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.14.51.png", alt: "Скриншот отзыва клиента 15" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.14.55.png", alt: "Скриншот отзыва клиента 16" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.15.02.png", alt: "Скриншот отзыва клиента 17" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.15.07.png", alt: "Скриншот отзыва клиента 18" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.15.13.png", alt: "Скриншот отзыва клиента 19" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.15.17.png", alt: "Скриншот отзыва клиента 20" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.15.21.png", alt: "Скриншот отзыва клиента 21" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.15.25.png", alt: "Скриншот отзыва клиента 22" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.15.31.png", alt: "Скриншот отзыва клиента 23" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.15.35.png", alt: "Скриншот отзыва клиента 24" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.15.39.png", alt: "Скриншот отзыва клиента 25" },
  { src: "/images/reviews/Снимок экрана 2026-03-23 в 15.15.44.png", alt: "Скриншот отзыва клиента 26" },
]


import { motion } from "framer-motion"

export function Reviews() {
  const { openModal } = useModal()
  return (
    <section className="py-24 overflow-hidden bg-background" id="reviews" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-16 md:gap-24 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            id="reviews-heading" 
            className="font-headline text-4xl md:text-5xl lg:text-[4rem] font-black uppercase tracking-tight text-white leading-[1.05]"
          >
            ОТЗЫВЫ НАШИХ КЛИЕНТОВ ЭТО НАША ГОРДОСТЬ
          </motion.h2>
        </div>

        <div className="relative z-10">
          <CardCarousel images={reviewImages} showPagination={false} />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center mt-6 md:mt-8 relative z-10"
        >
          <Button size="lg" variant="primary" className="w-full md:w-auto" onClick={openModal}>
            Рассчитать стоимость
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
