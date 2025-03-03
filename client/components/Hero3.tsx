import Image from "next/image";

const Hero3 = () => {
  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-20 xl:pb-25 xl:pt-46 border-red-300 border">
      <div className="flex lg:items-center lg:gap-8 xl:gap-20 max-w-[1400px] mx-auto md:px-8 border border-yellow-300">
        <div className=" md:w-1/2">
          <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
            🔥 Iwosan, A Complete Health Management System
          </h4>
          <h1> Book appointment with World Doctor at an affordable rate</h1>
        </div>
        <div className="animate_right hidden lg:block md:w-1/2">
          <div className="relative">
            <Image
              src="/images/shape/shape-01.png"
              alt="shape"
              width={46}
              height={246}
              className="absolute -left-11.5 top-0"
            />
            <Image
              src="/images/shape/shape-02.svg"
              alt="shape"
              width={36.9}
              height={36.7}
              className="absolute bottom-0 right-0 z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
