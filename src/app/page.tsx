import Image from "next/image";
import { images } from "../../constants";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex justify-center content-center items-center min-h-screen bg-black relative">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={images.img_logo_giff}
          alt="A New Burma"
          width={358}
          height={358}
        />
        <Link
          href="/home"
          className="relative inline-flex justify-center items-center bg-black text-white border border-white gap-4 px-[28px] py-[12px] transition hover:shadow-[8px_8px_white]"
        >
          Come in A NEW BURMA
          <Image
            src={images.icon_right_arrow}
            alt="Come in A NEW BURMA"
            className="animate-pulse"
          />
        </Link>
      </div>
    </main>
  );
}
