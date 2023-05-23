import Image from 'next/image';
import { BsCheckCircle } from 'react-icons/bs';
function Everything() {
  const everythingData = [
    {
      title: 'Stick to your budget',
      subtitle:
        'Find the right service for every price point. No hourly rates, just project-based pricing.',
    },
    {
      title: 'Get quality work done quickly',
      subtitle:
        'Hand your project over to a talented freelancer in minutes, get long-lasting results.',
    },
    {
      title: "Pay when you're happy",
      subtitle:
        'Upfront quotes mean no surprises. Payments only get released when you approve.',
    },
    {
      title: 'Count on 24/7 support',
      subtitle:
        'Our round-the-clock support team is available to help anytime, anywhere.',
    },
  ];
  return (
    <div className="bg-[#f1fdf7] md:flex py-20 justify-between px-24">
      <div>
        <h2 className="text-4xl mb-5 pr-10 text-[#404145] font-bold">
          The best part? Everything.
        </h2>
        <ul className="flex flex-col gap-10">
          {everythingData.map(({ title, subtitle }) => {
            return (
              <li key={title}>
                <div className="flex pl-1 gap-2 items-center text-xl">
                  <BsCheckCircle className="text-[#62646a]" />
                  <h6 className="text-lg font-semibold">{title}</h6>
                </div>
                <p className="text-[#62646a] pl-1 text-lg tracking-wide leading-7 max-w-[500px]">
                  {subtitle}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative h-96 w-full mt-10 lg:w-2/4">
        <Image src="/everything.webp" fill alt="everything" />
      </div>
    </div>
  );
}

export default Everything;
