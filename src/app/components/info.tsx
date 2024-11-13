"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { images } from "../../../constants";

export default function InfoSlider() {
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      spaceBetween={0}
      centeredSlides={true}
      className="overlay-slider w-full h-full"
    >
      {/* Swiper Slides */}
      {[images.img_info_slider01, images.img_info_slider01].map(
        (image, index) => (
          <SwiperSlide key={index} className="overlay-slide">
            <div className="image-container relative w-full h-full">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}
