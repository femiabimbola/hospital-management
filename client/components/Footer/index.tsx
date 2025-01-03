import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 border border-red-400">
      <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12 border border-green-500">

        {/* Column-1 */}
        <div className='sm:col-span-6 lg:col-span-5'>
          <div className="flex flex-shrink-0 items-center border-right">
            <Image src="/images/logo.webp" className="text-3xl font-bold" width={45} height={45} alt="logo"/>
            <h1 className="w-full text-xl md:text-2xl font-medium">Iwosan.</h1>
          </div>
          <h3 className='text-xs font-medium text-gunmetalgray lh-160 mt-5 mb-4 lg:mb-16'> 
            Open an account in minutes, <br/> get full financial control for much longer.
          </h3>
          <div className='flex gap-4'>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer