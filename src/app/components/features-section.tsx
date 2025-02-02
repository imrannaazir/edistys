import Image from "next/image";

export default function FeaturesSection() {
  const features = [
    {
      title: "Full-suite solutions",
      description:
        "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
      icon: "/icons/featues/feature1.svg",
    },
    {
      title: "Simplify the complex",
      description:
        "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
      icon: "/icons/featues/feature2.avif",
    },
    {
      title: "Cutting-edge tech",
      description:
        "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
      icon: "/icons/featues/feature3.svg",
    },
  ];

  return (
    <section className="w-full   ">
      <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-4 bg-slate-50 rounded-[20px] p-8"
            >
              <Image src={feature.icon} alt="icon" width={50} height={50} />
              <h3 className="text-2xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
