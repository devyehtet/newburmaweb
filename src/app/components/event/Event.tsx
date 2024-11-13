"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";
import { NavigationOptions } from "swiper/types";
import Image from "next/image";
import Link from "next/link";
import { EqualHeight, EqualHeightElement } from "react-equal-height";
import ColorThief from "colorthief";
import { events } from "../../../../constants/events";

interface MultipleSlideCarouselProps {
  programFilter?: string;
  yearFilter?: string;
}
export default function MultipleSlideCarousel({
  programFilter,
  yearFilter,
}: MultipleSlideCarouselProps) {
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance] = useState<SwiperClass | null>(null);

  const parseDate = (dateString: string): Date => {
    // Extract the last date in the range, or use the full date if no range
    const singleDateString = dateString.includes("-")
      ? dateString.split("-").pop()?.trim()
      : dateString;

    return singleDateString ? new Date(singleDateString) : new Date();
  };

  const filteredEvents = events
    .filter((event) => {
      const matchesProgram = programFilter
        ? event.programTitle === programFilter
        : true;
      const matchesYear = yearFilter ? event.date.includes(yearFilter) : true;
      return matchesProgram && matchesYear;
    })
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

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

  const colorThief = new ColorThief();
  const [gradientColors, setGradientColors] = useState<{
    [key: number]: string[];
  }>({});

  const handleImageLoad = async (
    imageElement: HTMLImageElement,
    eventId: number
  ) => {
    try {
      const colorThief = new ColorThief();
      const colors = colorThief.getPalette(imageElement, 3);
      if (colors && colors.length >= 3) {
        const gradientStart = `rgb(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]})`;
        const gradientMiddle = `rgb(${colors[1][0]}, ${colors[1][1]}, ${colors[1][2]})`;
        const gradientEnd = `rgb(${colors[2][0]}, ${colors[2][1]}, ${colors[2][2]})`;
        setGradientColors((prev) => ({
          ...prev,
          [eventId]: [gradientStart, gradientMiddle, gradientEnd],
        }));
      }
    } catch (error) {
      console.error("Failed to extract colors from image:", error);
    }
  };

  return (
    <div className="w-full py-10">
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
          breakpoints={{
            1920: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1028: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="multiple-slide-carousel flex"
        >
          {filteredEvents.map((event, index) => (
            <SwiperSlide key={index} className="!h-auto relative">
              <Link href={`/events/${event.url}`} passHref>
                <div
                  className="!h-full group cursor-pointer rounded-br-xl rounded-tl-xl hover:shadow-md shadow-indigo-950 hover:border-gray-300 group transition-all duration-300 ease-in-out border-2 border-slate-200 flex flex-col overflow-hidden hover:opacity-90"
                  style={{
                    background: gradientColors[event.id]
                      ? `linear-gradient(135deg, ${
                          gradientColors[event.id][0]
                        }, ${gradientColors[event.id][1]}, ${
                          gradientColors[event.id][2]
                        })`
                      : undefined,
                  }}
                >
                  <div className="p-8 flex flex-col text-white">
                    <EqualHeightElement name="slider-head">
                      <h4 className="text-2xl font-neutraface leading-7 mt-2 mb-5">
                        {event.title}
                      </h4>
                      <p className="text-sm">{event.date}</p>
                      <h3 className="">{event.programTitle}</h3>
                      {event.eventName && (
                        <p className="text-sm font-light text-yellow-200">
                          {event.eventName}
                        </p>
                      )}
                    </EqualHeightElement>
                  </div>
                  <div className="p-4 shadow-md">
                    <Image
                      src={event.photo}
                      alt={`${event.programTitle} - ${event.eventName}`}
                      onLoadingComplete={(img) =>
                        handleImageLoad(img, event.id)
                      }
                      className="rounded-lg w-full h-44 object-cover group-hover:shadow-lg group-hover:scale-[1.02] transition-all duration-300"
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute flex justify-center items-center m-auto md:right-40 w-fit md:top-20 top-36 right-16">
          <button
            ref={prevButtonRef}
            className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-grey-600 !w-12 !h-12 transition-all duration-500 hover:border-gray-900 !-translate-x-16"
          ></button>
          <button
            ref={nextButtonRef}
            className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-grey-600 !w-12 !h-12 transition-all duration-500 hover:border-gray-900 !translate-x-16"
          ></button>
        </div>
      </EqualHeight>
    </div>
  );
}
