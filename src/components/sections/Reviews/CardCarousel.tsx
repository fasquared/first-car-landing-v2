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

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = React.memo(({
  images,
  autoplayDelay = 3000,
  showPagination = false,
  showNavigation = true,
}) => {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-center gap-4">

        <div className="w-full">
          <Swiper
            spaceBetween={20}
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            speed={800}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
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
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="group relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface-container transition-all duration-500 hover:border-primary-container/30">
                  <Image
                    src={image.src}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={image.alt}
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-primary-container/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
})

CardCarousel.displayName = "CardCarousel"
