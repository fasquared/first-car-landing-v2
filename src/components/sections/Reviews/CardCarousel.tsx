"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { m } from "framer-motion"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = React.memo(({
  images,
  autoplayDelay = 4000,
  showPagination = false,
  showNavigation = true,
}) => {
  return (
    <div className="w-full" role="region" aria-label="Карусель отзывов клиентов">
      <div className="flex w-full items-center justify-center">
        <div className="w-full">
          <Swiper
            spaceBetween={24}
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            speed={1000}
            watchSlidesProgress={true}
            coverflowEffect={{
              rotate: 0,
              stretch: -20,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={showPagination ? { clickable: true } : false}
            navigation={
              showNavigation
                ? {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }
                : undefined
            }
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="reviews-swiper !overflow-visible"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="!w-[280px] md:!w-[340px] py-10">
                <m.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index % 4 * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/40 backdrop-blur-sm transition-all duration-500 hover:border-primary-container/30"
                >
                  <Image
                    src={image.src}
                    fill
                    sizes="(max-width: 768px) 280px, 340px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={image.alt}
                    priority={index < 3}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </m.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
})

CardCarousel.displayName = "CardCarousel"
