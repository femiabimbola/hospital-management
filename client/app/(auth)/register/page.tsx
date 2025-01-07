import { RegisterForm } from "@/components/RegisterForm";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div className="flex max-h-screen"> 
      <section className="my-auto w-[50%]">
        <RegisterForm />
      </section>
      <section>
        <Image src="/assets/login/onboarding-img.webp"
          alt="patient"
          width={1000}
          height={1000}
          className="side-img max-w-[50%]"
        />
      </section>
    </div>
  );
};

export default RegisterPage;
