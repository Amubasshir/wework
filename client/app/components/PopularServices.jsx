'use client';
import Image from 'next/image';
import { useRouter } from 'next/router';

function PopularServices() {
  const router = useRouter;
  const popularServicesData = [
    {
      name: 'Ai Artists',
      label: 'Add talent to AI',
      image: '/service-1.webp',
    },
    {
      name: 'Logo Design',
      label: 'Build your brand',
      image: '/service-2.webp',
    },
    {
      name: 'Wordpress',
      label: 'Customize your site',
      image: '/service-3.webp',
    },
    {
      name: 'Voice Over',
      label: 'Share your message',
      image: '/service-4.webp',
    },
    // {
    //   name: 'Video Explainer',
    //   label: 'Engage your audience',
    //   image: '/service-5.webp',
    // },
    {
      name: 'Social Media',
      label: 'Reach more coustomer',
      image: '/service-6.webp',
    },
    {
      name: 'SEO',
      label: 'Unlock growth online',
      image: '/service-7.webp',
    },
    {
      name: 'Illustration',
      label: 'Color your dreams',
      image: '/service-8.webp',
    },
    // {
    //   name: 'Translation',
    //   label: 'Go global',
    //   image: '/service-9.webp',
    // },
    {
      name: 'Data Entry',
      label: 'Learn your business',
      image: '/service-10.webp',
    },
  ];
  return (
    <div className="mx-20 my-16">
      <h2 className="text-4xl mb-5 text-[#404145] font-bold">
        Popular Services
      </h2>
      <ul className="flex flex-wrap gap-16">
        {popularServicesData.map(({ name, label, image }) => {
          return (
            <li
              key={name}
              className="relative cursor-pointer"
              onClick={() => router.push(`/search?q=${name.toLowerCase()}`)}
            >
              <div className="absolute z-10 text-white left-5 top-4">
                <span>{label}</span>
                <h6 className="font-extrabold text-2xl">{name}</h6>
              </div>
              <div className="h-80 w-72 ">
                <Image src={image} fill alt="service" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PopularServices;
