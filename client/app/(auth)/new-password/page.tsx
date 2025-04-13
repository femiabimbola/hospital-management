import Image from "next/image";
import { AuthNavbar } from "../AuthNavbar";
import { ForgetPassword } from "@/components/ForgetPassword";
import {useSearchParams} from "next/navigation";

const NewPasswordPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  console.log(token)
  
  return (
    <div className="flex max-h-screen">
      <section className="w-[60%] px-14 space-y-16">
        <div>
          <AuthNavbar />
        </div>
        <div className="pt-2">
          <h1 className="w-full text-xl md:text-3xl font-bold text-center">
            Enter new Password
          </h1>
        </div>
          <ForgetPassword/>
      </section>
    
      {/* The right side */}
      <Image
        src="/assets/login/doctor2.webp"
        alt="patient"
        width={1000}
        height={1000}
        className="hidden h-full md:block max-w-[47%]"
      />
    </div>
  )
}

export default NewPasswordPage;