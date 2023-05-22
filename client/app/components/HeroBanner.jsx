'use client';

import Image from 'next/image';
import { useState } from 'react';

const HeroBanner = () => {
  // const router = useRouter();
  const [image, setImage] = useState(1);

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
      </div>
    </div>
  );
};

export default HeroBanner;
