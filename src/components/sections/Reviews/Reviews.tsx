"use client";

import React from "react"
import { m } from "framer-motion"
import { CardCarousel } from "./CardCarousel"
import { Button } from "@/components/ui/Button"
import { useModal } from "@/components/providers/ModalProvider"
import { REVIEW_IMAGES } from "@/constants/reviews"
import { fadeInUp } from "@/lib/animations"

export function Reviews() {
  const { openModal } = useModal()
  return (
    <section className="py-24 overflow-hidden bg-background" id="reviews" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-16 md:gap-24 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <m.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            id="reviews-heading" 
            className="font-headline text-4xl md:text-5xl lg:text-[4rem] font-black uppercase tracking-tight text-white leading-[1.05]"
          >
            ОТЗЫВЫ НАШИХ КЛИЕНТОВ <br className="hidden md:block" /> ЭТО НАША ГОРДОСТЬ
          </m.h2>
        </div>

        
        <m.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <CardCarousel images={REVIEW_IMAGES} showPagination={false} />
        </m.div>
        

        <m.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center mt-6 md:mt-8 relative z-10"
        >
          <Button size="lg" variant="primary" className="w-full md:w-auto" onClick={openModal}>
            Рассчитать стоимость
          </Button>
        </m.div>
      </div>
    </section>
  )
}
