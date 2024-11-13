"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";
import { NavigationOptions } from "swiper/types";
import Image from "next/image";
import { EqualHeight, EqualHeightElement } from "react-equal-height";
import { events } from "../../../../constants/events";

interface AllEventsProps {
  photo: "photosFirst" | "photosSecond";
}

export default function MultipleSlideCarousel({ photo }: AllEventsProps) {
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance] = useState<SwiperClass | null>(null);

  useEffect(() => {
    if (swiperInstance && prevButtonRef.current && nextButtonRef.current) {
      swiperInstance.params.navigation = {
        prevEl: prevButtonRef.current,
        nextEl: nextButtonRef.current,
      };
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="w-full py-10 relative">
      <EqualHeight>
        <Swiper
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          onInit={(swiper) => {
            if (swiper.params.navigation) {
              (swiper.params.navigation as NavigationOptions).prevEl =
                prevButtonRef.current;
              (swiper.params.navigation as NavigationOptions).nextEl =
                nextButtonRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          className="multiple-slide-carousel flex"
        >
          {events.map((event, index) => (
            <div key={index}>
              {event.activityPhotos &&
                event.activityPhotos[photo] &&
                event.activityPhotos[photo].map((image, imgIndex) => (
                  <SwiperSlide key={`${photo}-${index}-${imgIndex}`}>
                    <div className="!h-full">
                      <Image
                        src={image}
                        alt={`${event.programTitle} - ${
                          event.eventName
                        } - ${photo} Image ${imgIndex + 1}`}
                        className="w-full h-[500px] object-cover shadow-md rounded-md"
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </div>
          ))}
        </Swiper>
        {/*<div className="absolute flex justify-center items-center m-auto w-fit top-1/2">*/}
        <button
          ref={prevButtonRef}
          className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-black rounded-md !w-8 !h-8 transition-all duration-500 md:!-translate-x-12 after:!text-black"
        ></button>
        <button
          ref={nextButtonRef}
          className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-black rounded-md !w-8 !h-8 transition-all duration-500 md:!translate-x-12 after:!text-black"
        ></button>
        {/*</div>*/}
      </EqualHeight>
    </div>
  );
}
