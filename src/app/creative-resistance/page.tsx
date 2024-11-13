"use client";
import Header from "@/app/components/Header";
import MainVisualSwiper from "@/app/components/MainVisualSlider";
import ProgramOverview from "@/app/components/ProgramOverview";
import Event from "@/app/components/event/Event";
import { useState } from "react";
export default function CRPpage() {
  const text = `The Creative Resistance Program, a pivotal initiative by A NEW BURMA, is strategically designed to bolster the resistance movement against the 2021 coup in Burma. This program harnesses the unique power of artistic expression to shed light on the human rights violations perpetrated by the junta, serving as a compelling voice in the campaign for justice and freedom. By intertwining art with advocacy, it not only documents the struggles and resilience of those suffering under the coup but also inspires and nurtures hope among those bravely fighting against the Junta’s oppressive regime. The Creative Resistance Program stands as a testament to the belief that art can be a formidable force in challenging tyranny and envisioning a future anchored in democracy and human dignity. 
`;

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
        <Event programFilter="Creative Resistance Program" />
      </section>
    </>
  );
}
