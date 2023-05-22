'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const HeroBanner = () => {
  // const router = useRouter();
  const [image, setImage] = useState(3);

  useEffect(() => {
    const interval = setInterval(
      () => setImage(image >= 3 ? 1 : image + 1),
      10000
    );
    return () => clearInterval(interval);
  }, [image]);

  return (
    <div className="hero-banner h-[680px] relative bg-cover">
      <div className="absolute top-0 right-0 w-[110vw] h-[680px] transition-opacity z-10">
        <Image
          alt="hero-image"
          src="https://i.ibb.co/TTtjd27/bg-hero1.webp"
          fill
          className={`${
            image === 1 ? 'opacity-100' : 'opacity-0'
          } transition-all duration-1000`}
        />
        <Image
          alt="hero-image"
          src="https://i.ibb.co/WfpSC3S/bg-hero2.webp"
          fill
          className={`${
            image === 2 ? 'opacity-100' : 'opacity-0'
          } transition-all duration-1000`}
        />
        <Image
          alt="hero-image"
          src="https://i.ibb.co/b6hqdrL/bg-hero5.webp"
          fill
          className={`${
            image === 3 ? 'opacity-100' : 'opacity-0'
          } transition-all duration-1000`}
        />
      </div>
      <div className="z-20 relative w-[650px] flex justify-center flex-col h-full gap-5 ml-20">
        <h1 className="text-white text-5xl font-semibold leading-snug">
          Find the perfect&nbsp;
          <span className="font-domine font-light">
            freelance
            <br />
            service,
          </span>
          &nbsp;right away
        </h1>
        <div className="flex align-middle">
          <div className="relative">
            <input
              type="text"
              className="h-12 w-[550px] pl-4 rounded-md rounded-r-none"
              placeholder="Search for any service..."
            />
          </div>
          <button className="bg-[#1DBF73] text-white px-6 text-lg font-semibold rounded-r-md">
            <span className="text-2xl">
              <AiOutlineSearch />
            </span>
          </button>
        </div>
        <div className="text-white flex items-center gap-4">
          <span className="text-sm font-semibold">Popular:</span>
          <ul className="flex gap-4">
            <li className="text-sm font-medium py-1 px-3 border rounded-full hover:bg-white hover:text-black hover:font-semibold transition-all duration-300 cursor-pointer">
              Website Design
            </li>
            <li className="text-sm font-medium py-1 px-3 border rounded-full hover:bg-white hover:text-black hover:font-semibold transition-all duration-300 cursor-pointer">
              Wordpress
            </li>
            <li className="text-sm font-medium py-1 px-3 border rounded-full hover:bg-white hover:text-black hover:font-semibold transition-all duration-300 cursor-pointer">
              Logo Design
            </li>
            <li className="text-sm font-medium py-1 px-3 border rounded-full hover:bg-white hover:text-black hover:font-semibold transition-all duration-300 cursor-pointer">
              AI Service
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
