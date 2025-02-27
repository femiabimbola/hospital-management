import Image from "next/image";

const Hero = () => {
  return ( 
    <div id="hero" className="">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
          
          <div className='col-span-6 flex flex-col justify-evenly'>
            <div className='flex gap-2 mx-auto lg:mx-0 align-middle'>
              <Image src="/images/logo.webp" alt="check-image" width={26} height={26} />
              <h3 className='text-kellygreen text-sm font-semibold text-center lg:text-start'>Get access to world class medical doctors</h3>
            </div>
            <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Advance your engineering skills with us.</h1>

            <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'> Get a top notch medical advisor </h3>
            <div className='flex items-center justify-between pt-10 lg:pt-4'>
              <p>Hey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;