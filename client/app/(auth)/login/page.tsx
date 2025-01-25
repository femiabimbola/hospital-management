import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";
import { AuthNavbar } from "../AuthNavbar";
import { AuthFooter } from "../AuthFooter";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex max-h-screen">
      <section className="w-[60%] px-14 space-y-16">
        <div>
          <AuthNavbar />
        </div>
        <div className="pt-2">
          <h1 className="w-full text-xl md:text-3xl font-bold text-center">
            Sign In
          </h1>

          <LoginForm />

          <div className="flex justify-between pt-6">
            <Link href={"/register"}> Don't have an account?</Link>
            <Link href={"/forget-password"}> Forget Password</Link>
          </div>
        </div>

        {/* <AuthFooter /> */}
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
  );
};

export default LoginPage;
