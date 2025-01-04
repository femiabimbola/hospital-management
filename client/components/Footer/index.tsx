import Link from "next/link";
import Image from "next/image";
import { products, socialLinks } from "@/constant";

const Footer = () => {
  return (
    <div className="mx-auto max-w-2xl sm:pt-14 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="my-10 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">

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
            {socialLinks.map((items, index) => (
              <Link href={items.link} key={index}>
                <div className="bg-white h-9 w-9 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-[#399299]">
                  <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className=""
                  />  
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* COLUMN 2/3/4 */}
        {products.map((product, index) =>(
          <div key={product.id} className="sm:col-span-2">
            <p className="text-lg font-medium mb-9">{product.section}</p>
            <ul>
            {product.link.map((link:string, index:number ) => (
              <li key={index} className="mb-4">
                <Link href={"/"} className="text-base font-normal mb-6 space-links">{link}</Link>
              </li>
            ))}
            </ul>
          </div>
        ))}
        
      </div>

      {/* All right reserved */}
      <div className=" py-10 md:flex items-center justify-between border-t border-t-gray-blue">
        <h4 className='opacity-75 text-sm text-center md:text-start font-normal'>
          @2025. Iwosan Application.All rights reserved
        </h4>
        <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
        <h4 className='text-dark-red opacity-75 text-sm font-normal'>
          <Link href="/" target="_blank">Privacy policy</Link>
        </h4>
        <div className="h-5 bg-dark-red opacity-25 w-0.5"></div>
        <h4 className='text-dark-red opacity-75 text-sm font-normal'>
          <Link href="/" target="_blank">Terms & conditions</Link>
        </h4>
        </div>
      </div>
    </div>
  )
}

export default Footer