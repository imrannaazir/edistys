import Image from "next/image";

export type TTechnologyCard = {
  id: number;
  title: string;
  subTitle: string;
  content: string;
  boldContent: string;
  image: string;
};

export default function TechnologyCard({ item }: { item: TTechnologyCard }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 p-8 lg:p-16">
      <div className="flex-1">
        <h3 className="text-xs lg:text-base text-primary font-bold uppercase tracking-widest mb-4">
          {item.title}
        </h3>
        <h2
          className="text-2xl lg:text-[40px] font-semibold text-#0b305b
 mb-6"
        >
          {item.subTitle}
        </h2>
        <p
          className="text-[#0b305b
] font-bold mb-6 text-xs lg:text-base"
        >
          {item.boldContent}
        </p>
        <p
          className="text-[#0b305b
]  mb-6 text-xs lg:text-base"
        >
          {item.content}
        </p>
      </div>
      <div className="flex-1">
        <Image
          src={item.image}
          width={489}
          height={425}
          alt="Business professionals discussing compliance"
          className="rounded-[20px] shadow-xl w-full aspect-square object-cover"
        />
      </div>
    </div>
  );
}
