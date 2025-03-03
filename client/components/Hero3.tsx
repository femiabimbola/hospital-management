import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero3 = () => {
  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-20 xl:pb-25 xl:pt-46 border-red-300 border">
      <div className="flex lg:items-center lg:gap-8 xl:gap-20 max-w-[1400px] mx-auto md:px-8 ">
        <div className=" md:w-1/2 ">
          <h4 className="mb-5 text-lg font-medium">
            🔥 Iwosan, A Complete Health Management System
          </h4>
          <h1 className="text-4xl font-bold mb-5"> Book appointment with World Doctor at an affordable rate</h1>
          <p>
            We offer world class and a complete health solution for you irrespective of your need. We have doctors with different speciality, ready to help with your health need. Our charges are very affordable.
            You health record are stored in the cloud.
          </p>
          <Button asChild className="mt-10 px-10">
            <Link href={'/login'}> Get Started</Link>
          </Button>
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
