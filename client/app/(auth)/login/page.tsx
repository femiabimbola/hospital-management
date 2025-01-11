import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";
import { AuthNavbar } from "../AuthNavbar";
import { AuthFooter } from "../AuthFooter";

const LoginPage = () => {
  return (
    <div className="flex max-h-screen">
      <section className="my-auto w-[60%]">
      <AuthNavbar />
        <div className="flex items-center">
          <Image
            src="/images/logo.webp"
            width={40} height={40} alt="logo"
          />
          <h1 className="w-full text-xl md:text-3xl font-medium">Iwosan</h1>
        </div>

        <LoginForm />
        <AuthFooter />
      </section>
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
