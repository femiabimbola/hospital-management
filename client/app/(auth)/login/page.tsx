import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="flex max-h-screen">
      <section className="my-auto w-[50%]">
        <div className="flex items-center">
          <Image
            src="/images/logo.webp"
            width={40} height={40} alt="logo"
          />
          <h1 className="w-full text-xl md:text-3xl font-medium">Iwosan</h1>
        </div>

        <LoginForm />
      </section>
      <Image
        src="/assets/login/onboarding-img.webp"
        alt="patient"
        width={1000}
        height={1200}
        className="hidden h-full object-cover md:block max-w-[57.4%]"
      />
    </div>
  );
};

export default LoginPage;
