import { ThemeToggle } from "@/components/Navbar/ThemeToggler"
import Image from "next/image"
import Link from "next/link"

export const AuthNavbar = () => {
  return (
    <div className="flex justify-between items-center h-20 max-w-[1440px] mx-auto ">
        <Link href={'/'} className="flex items-center">
         <Image
            src="/images/logo.webp"
            className="text-3xl font-bold"
            width={42} height={42} alt="logo"
          />
          <h1 className="w-full text-xl md:text-2xl font-medium">Iwosan.</h1>
          </Link>
      
      <ThemeToggle />
    </div>
  )
}