import Image from "next/image";

export default function TechnologyCard({ slide }: { slide: any }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 p-8 lg:p-16">
      <div className="flex-1">
        <h3 className="text-primary font-bold uppercase tracking-widest mb-4">
          COMPLIANCE READY
        </h3>
        <h2
          className="text-4xl lg:text-[40px] font-semibold text-#0b305b
 mb-6"
        >
          Manage compliance with ease
        </h2>
        <p
          className="text-[#0b305b
] font-bold mb-6 "
        >
          Navigate through the evolving regulatory landscape with confidence by
          streamlining compliance management—through real-time risk monitoring
          solutions powered by AI and machine learning.
        </p>
        <p
          className="text-[#0b305b
]  mb-6 "
        >
          Transform your compliance strategy with flexible and diversified
          policy rules, powered by cutting-edge technology that is designed for
          seamless integration with core banking and card payment systems.
        </p>
      </div>
      <div className="flex-1">
        <Image
          src="/images/technologies/agile-adaptation.avif"
          width={489}
          height={425}
          alt="Business professionals discussing compliance"
          className="rounded-[20px] shadow-xl w-full aspect-square object-cover"
        />
      </div>
    </div>
  );
}
