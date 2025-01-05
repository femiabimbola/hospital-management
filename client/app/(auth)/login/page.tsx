import Image from "next/image";

const LoginPage = () => {
  return (
  <div className="flex max-h-screen"> 
    <section className="my-auto">
      

    </section>
    <Image
        src="/assets/login/onboarding-img.webp"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
  </div>
  )
}

export default LoginPage;