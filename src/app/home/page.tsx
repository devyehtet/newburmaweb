import Header from "@/app/components/Header";
import MainVisualSwiper from "@/app/components/MainVisualSlider";
import { images } from "../../../constants";
import Image from "next/image";
import Card from "@/app/components/vision/Card";
import Link from "next/link";
import { EqualHeight, EqualHeightElement } from "react-equal-height";
import Event from "@/app/components/event/Event";
import InfoSlider from "../components/info";
export default function HomePage() {
  return (
    <>
      <Header />
      <section className="w-full pt-16">
        <MainVisualSwiper />
      </section>
      <section className="py-[100px] px-[30px] overflow-hidden">
        {/* Intro Section */}
        <div className="flex md:flex-row flex-col gap-5 mb-28">
          <div className="md:w-1/2 w-full">
            <InfoSlider />
          </div>
          <div className="md:w-1/3 w-full flex flex-col gap-8">
            <h3 className="flex justify-center items-center">
              <Image
                src={images.img_logo}
                alt="A New Burma is"
                className="w-2/3 max-w-80"
              />
            </h3>
            <p className="leading-7 text-justify">
              is a collective of young people who believe in working together
              toward a shared goal: building a future inclusive of all who would
              call Myanmar home. We have unique sets of skills and experiences
              in start-ups, marketing, politics, human rights, legal and
              economic activism, and across the social and creative industries.
              Many of us are exiled creatives ourselves, and through countless
              conversations with fellow creatives, we understand that life is
              more than just surviving; shared creativity and generous community
              help give existence identity and meaning. We believe Creative
              Resistance goes beyond refusing to be controlled, it is also about
              envisioning and building the New Free, together.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col relative md:mx-15 lg:mx-20 pt-[60px] pb-24 md:px-24 px-14">
          <Image
            src={images.img_vision_bg}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-[-1]"
          />
          <h2 className="text-[56px] z-50 text-white font-bold leading-7 mb-40">
            Vision
          </h2>
          <Image
            src={images.img_vision_text}
            alt="vision"
            className="absolute top-[-50px] md:left-[170px] sm:left-[250px] w-11/12 max-w-[1198px]"
          />
          <div className="flex flex-col md:flex-row gap-20">
            <Card text="Envisioning a New Myanmar where diversity, creativity, and freedom form the cornerstone of a resilient and vibrant society." />
            <Card text="Creating a future where Myanmar's youth and creative minds are at the forefront of a movement for peace, democracy, and inclusive development." />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative">
        <Image
          src={images.img_programs_bg}
          alt="Background Image"
          layout="fill"
          objectFit="contain"
          objectPosition="top"
          quality={100}
          className="z-[-1]"
        />
        <div className="flex flex-col md:mx-5 lg:mx-15 pt-[60px] pb-16 px-15 lg:pb-24 lg:px-24">
          <h2 className="text-[56px] z-50 text-white font-bold leading-7 mb-40">
            Programs
          </h2>
          <EqualHeight>
            <div className="flex flex-col md:flex-row gap-2 mx-8 sm:mx-8 md:max-w-none">
              {/* First Program */}
              <div className="bg-white w-full md:w-1/2 p-6 md:p-8 border border-black">
                <div className="flex justify-between">
                  <h4 className="font-neutraface leading-8 text-4xl w-4/5 mb-8">
                    Creative Voices for Change Program
                  </h4>
                  {/*<span className="w-6 h-6 bg-black rotate-45 mt-2"></span>*/}
                </div>
                <EqualHeightElement name="Name">
                  <p className="leading-7 pb-7">
                    An initiative of A NEW BURMA, is a transformative platform
                    dedicated to empowering artists who are deeply involved in
                    advocating for social justice, human rights, and democracy,
                    particularly in the context of Burma&apos;s Spring
                    Revolution. This program is a beacon of hope and a vessel
                    for change, offering artists a dynamic space to express
                    their visions and challenges through their art. By focusing
                    on the critical issues of justice and democratic values, the
                    Creative Voices for Change Program not only amplifies the
                    voices of Burmese artists but also serves as a global
                    testament to the power of art as a tool for societal
                    transformation and resilience.
                  </p>
                </EqualHeightElement>
                <div className="flex justify-end items-center">
                  <Link
                    href="/creative-voices"
                    className="inline-flex py-1 px-5 border border-black text-black hover:shadow-[8px_8px_black] transition-all ease-in-out"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Second Program */}
              <div className="bg-white w-full md:w-1/2 p-6 md:p-8 border border-black">
                <div className="flex justify-between">
                  <h4 className="font-neutraface leading-8 text-4xl w-4/5 mb-8">
                    Creative Resistance Program
                  </h4>
                </div>
                <EqualHeightElement name="Name">
                  <p className="leading-7 pb-7">
                    A pivotal initiative by A NEW BURMA, is strategically
                    designed to bolster the resistance movement against the 2021
                    coup in Burma. This program harnesses the unique power of
                    artistic expression to shed light on the human rights
                    violations perpetrated by the junta, serving as a compelling
                    voice in the campaign for justice and freedom. By
                    intertwining art with advocacy, it not only documents the
                    struggles and resilience of those suffering under the coup
                    but also inspires and nurtures hope among those bravely
                    fighting against the Junta’s oppressive regime. The Creative
                    Resistance Program stands as a testament to the belief that
                    art can be a formidable force in challenging tyranny and
                    envisioning a future anchored in democracy and human
                    dignity. 
                  </p>
                </EqualHeightElement>
                <div className="flex justify-end items-center">
                  <Link
                    href="/creative-resistance"
                    className="inline-flex py-1 px-5 border border-black text-black hover:shadow-[8px_8px_black] transition-all ease-in-out"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </EqualHeight>
        </div>
      </section>
      <section className="relative md:mx-5 lg:mx-15 pt-[60px] pb-16 px-15 lg:pb-24 lg:px-24">
        <h2 className="font-neutraface text-[56px] z-50 text-black font-bold md:leading-7 leading-10 mb-14">
          Recent Events
        </h2>
        <Event />
      </section>
    </>
  );
}
