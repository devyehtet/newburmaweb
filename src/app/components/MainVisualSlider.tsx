"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { images } from "../../../constants";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { events } from "../../../constants/events";

export default function MainVisualSlider() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
      }}
      modules={[Autoplay, Pagination]}
      className="w-full h-[calc(100vh-4rem)] relative bg-white"
    >
      {events.map((event) => (
        <SwiperSlide key={event.id}>
          <div className="flex justify-center items-center h-full p-5">
            <Image
              src={event.photo}
              alt=""
              className="block w-full h-full object-cover"
            ></Image>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
