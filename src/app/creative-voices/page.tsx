"use client";
import Header from "@/app/components/Header";
import MainVisualSwiper from "@/app/components/MainVisualSlider";
import ProgramOverview from "@/app/components/ProgramOverview";
import Event from "@/app/components/event/Event";
import { useState } from "react";

export default function CvfcvPage() {
  const text = `The Creative Voices for Change Program, an initiative of A NEW BURMA,
  is a transformative platform dedicated to empowering artists who are
  deeply involved in advocating for social justice, human rights, and
  democracy, particularly in the context of Burma's Spring Revolution.
  This program is a beacon of hope and a vessel for change, offering
  artists a dynamic space to express their visions and challenges
  through their art. By focusing on the critical issues of justice and
  democratic values, the Creative Voices for Change Program not only
  amplifies the voices of Burmese artists but also serves as a global
  testament to the power of art as a tool for societal transformation
  and resilience.`;

  const [selectedYear, setSelectedYear] = useState<string>("");

  const years = ["2024", "2025", "2026"];

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  return (
    <>
      <Header />
      <section className="w-full pt-16">
        <MainVisualSwiper />
      </section>
      <ProgramOverview text={text} />
      <section className="relative md:mx-5 lg:mx-15 pt-[60px] pb-16 px-15 lg:pb-24 lg:px-24">
        <h2 className="text-[56px] z-50 text-black font-bold leading-7 mb-14">
          Events
        </h2>
        <div className="absolute flex justify-center items-center m-auto right-60 w-fit top-16">
          <select
            className="block w-40 px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <Event
          programFilter="Creative voices for Change Program"
          yearFilter={selectedYear}
        />
      </section>
    </>
  );
}
