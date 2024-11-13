interface ProgramOverviewProps {
  text: string;
}
export default function ProgramOverview({ text }: ProgramOverviewProps) {
  return (
    <section className="w-full bg-[#f0f0f0] md:p-24 p-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-bold md:text-6xl text-5xl md:leading-[67px] leading-[45px]  text-center mb-6 sm:mb-4">
          Program Overview
        </h2>
        <p className="text-justify">{text}</p>
      </div>
    </section>
  );
}
