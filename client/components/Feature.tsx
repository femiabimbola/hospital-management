import featuresData from "@/data";
import Image from "next/image";

const SingleFeature = ({feature} : {feature : Feature}) => {
  const { icon, title, description } = feature;
  return (
    <>
    <div>
      <Image src={icon} width={36} height={36} alt="title"/>
    </div>
    <h3>
    {title}
    </h3>
    </>
  )
}


const Feature = () => {
  return (
  <section>
    <div className="flex lg:items-center lg:gap-8 xl:gap-20 max-w-[1400px] mx-auto md:px-8 ">
      <div className="mt-10 gird grid-cols-1 gap-7 ">
      {featuresData.map((feature, key) => (
        <SingleFeature feature={feature} key={key} />
      ))}
      </div>
    </div>
  </section>
  )
}

export default Feature;