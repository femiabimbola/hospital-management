import featuresData from "@/data";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;
  return (
    <div>
      <div>
        <Image src={icon} width={36} height={36} alt="title" className="" />
      </div>
      <h3 className="font-semibold pt-2">{title}</h3>
      <p className="pt-2">{description}</p>
    </div>
  );
};

const Feature = () => {
  return (
    <section className="overflow-hidden border py-5 border-yellow-300">
      <div className="md:px-8 mt-4">
        <p className="mx-auto"> Our Features</p>
        <div className="border border-blue-400 grid grid-cols-1 lg:grid-cols-3 pt-5 gap-y-16 gap-x-20">
          {featuresData.map((feature, key) => (
            <SingleFeature feature={feature} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
