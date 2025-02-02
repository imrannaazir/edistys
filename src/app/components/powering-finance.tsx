import Container from "@/components/layout/container";
import Image from "next/image";

const PoweringFinance = () => {
  return (
    <main className="mt-[62px]">
      <Container className="flex *:flex-1 justify-between  gap md:gap-[15px]">
        {/* left */}
        <div className="space-y-6">
          <h3 className="font-bold text-primary leading-6 tracking-[2.65px]">
            POWERING THE FUTURE OF FINANCE
          </h3>
          <h1 className="text-[56px] font-semibold leading-[110%] text-[#0b305b]">
            Uncovering new ways to delight customers
          </h1>
          <p className="text-[#164377] font-bold leading-6">
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>

          <p className="text-[#164377]  leading-[26px]">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
        {/* right */}
        <div className="flex justify-end  relative  ">
          {/* background */}
          <div className="absolute -z-10 left-20  -top-5">
            <figure>
              <Image
                className="scale-125"
                src={"icons/powering-finance/background.svg"}
                width={140 * 4}
                height={140 * 4}
                alt="background"
              />
            </figure>
          </div>
          {/* foreground */}
          <div className="absolute   left-40  -bottom-10">
            <figure>
              <Image
                className="scale-[1.4]"
                src={"/icons/powering-finance/foreground.png"}
                width={140 * 4}
                height={140 * 4}
                alt="background"
              />
            </figure>
          </div>

          <div className="absolute left-[13%] top-[20%]">
            <figure>
              <Image
                className=""
                src={"/icons/powering-finance/card.svg"}
                width={73}
                height={73}
                alt="card"
              />
            </figure>
          </div>
          <div className="absolute left-[30%] top-[40%]">
            <figure>
              <Image
                className=" "
                src={"/icons/powering-finance/statistics.svg"}
                width={87}
                height={87}
                alt="statistics"
              />
            </figure>
          </div>
          <div className="absolute -right-[10%] top-[10%]">
            <figure>
              <Image
                className=" "
                src={"/icons/powering-finance/bank.svg"}
                width={115}
                height={115}
                alt="Bank"
              />
            </figure>
          </div>
          <Image
            className="max-w-[427px] "
            src={"/images/powering-finance.avif"}
            width={427}
            height={518}
            alt="powering finance"
          />
        </div>
      </Container>
    </main>
  );
};

export default PoweringFinance;
