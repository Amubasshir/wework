import Image from 'next/image';

function JoinWework() {
  return (
    <div className="mx-32 my-16 relative">
      <div className="absolute z-10 top-1/3 left-10">
        <h4 className="text-white font-semibold text-5xl mb-10">
          Suddenly it&apos;s all so <span className="font-serif">doable.</span>
        </h4>
        <button
          className="border text-base font-medium px-5 py-2   border-[#1DBF73] bg-[#1DBF73] text-white rounded-md"
          type="button"
        >
          Join Fiverr
        </button>
      </div>
      <div className=" w-full h-96">
        <Image src="/bg-signup.webp" fill alt="signup" className="rounded-sm" />
      </div>
    </div>
  );
}

export default JoinWework;
