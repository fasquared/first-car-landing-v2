"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { cn } from "@/lib/utils"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 3000,
  showPagination = false,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 240px;
    height: 400px;
    @media (min-width: 768px) {
      width: 280px;
      height: 460px;
    }
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `
  return (
    <div className="w-full">
      <style>{css}</style>
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
}
