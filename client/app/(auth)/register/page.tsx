import { RegisterForm } from "@/components/RegisterForm";
import Image from "next/image";
import { AuthNavbar } from "../AuthNavbar";
import { AuthFooter } from "../AuthFooter";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="flex max-h-screen ">
      <section className=" w-[60%] px-14 space-y-16">
        <div>
          <AuthNavbar />
        </div>

        <div className="pt-20">
          <h1 className="w-full text-xl md:text-3xl font-bold text-center">
            Create Your Account
          </h1>

          <RegisterForm />

          <div className="flex justify-between pt-6">
            <Link href={"/login"}> Already have an account?</Link>
            <Link href={"/forget-password"}> Forget Password</Link>
          </div>
        </div>
        {/* <AuthFooter /> */}
      </section>

      <Image
        src="/assets/login/doctor2.webp"
        alt="patient"
        width={1000}
        height={1000}
        className="hidden h-full md:block max-w-[46.5%]"
      />
    </div>
  );
};

export default RegisterPage;
