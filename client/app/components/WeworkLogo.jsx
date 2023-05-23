import Image from 'next/image';

const WeworkLogo = () => {
  return (
    <div className=" w-10 h-10 ">
      <Image
        src="https://i.ibb.co/TY0SwCJ/aladin-text-logoo.png"
        fill
        alt="signup"
        className="rounded-sm"
      />
    </div>
  );
};

export default WeworkLogo;
