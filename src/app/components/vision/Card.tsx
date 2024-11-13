interface CardProps {
  text: string;
}
export default function Card({ text }: CardProps) {
  return (
    <div className="relative flex p-8 bg-white text-black gap-4">
      <span className="absolute w-full h-full top-[21px] left-[38px] bg-white/35 border border-white z-[-1]  transition-all duration-300 ease-in-out"></span>
      {/*<span className="rounded-full w-[1rem] h-[0.5rem] border-2 border-black bg-black block mt-2"></span>*/}
      <p>{text}</p>
    </div>
  );
}
