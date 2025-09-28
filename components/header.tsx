import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-evenly items-center fade-in1 h-[100px]">
      <div className="flex gap-[10px] items-center text-gray-500 !font-semibold">
        <Image
          src="/images/fake-store-api.png"
          alt="src.name"
          width={500}
          height={500}
          className="w-[50px] h-[50px]"
        />

        <h4>Fake store app</h4>
      </div>

      <div>
        <Link
          href="/favorite"
          className="hover:!text-orange-400 !no-underline text-black transition-all duration-300"
        >
          Go to favorite
        </Link>
      </div>
    </header>
  );
};

export default Header;
