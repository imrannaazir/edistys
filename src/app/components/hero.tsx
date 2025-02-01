import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <header className="h-[calc(100vh-100px)] relative overflow-hidden">
      {/* background color */}
      <div className="absolute inset-0 home-hero__content__container -z-20"></div>

      {/* right side glow circle */}
      <div className="absolute size-[420px] -top-56 -right-20 blur-3xl overflow-x-hidden">
        <div className=" w-full h-full  bg-primary rounded-full "></div>
      </div>

      {/* left  */}
      <div className="absolute z-20 -top-[495px] left-20 w-[100%] right-1/2   h-full  ">
        <figure>
          <Image
            className="scale-[1.4]"
            src={"/backgrounds/WaveLinesDesktop2.svg"}
            width={1136}
            height={713}
            alt="Background"
          />
        </figure>
      </div>
      {/* left  */}
      <div className="absolute z-20 left-40 -top-10 w-[100%]     h-full  ">
        <figure>
          <Image
            className=" scale-[1.15]"
            src={"/backgrounds/WaveLinesDesktop1.svg"}
            width={1136}
            height={713}
            alt="Background"
          />
        </figure>
      </div>

      {/* right  */}
      {/* image */}
      <div className="absolute -z-10 top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none    ">
        <figure>
          <Image
            src={"/backgrounds/heroBackground.avif"}
            width={1136}
            height={713}
            alt="Background"
          />
        </figure>
      </div>

      {/* content  */}
      <div className="absolute inset-0 z-30  text-background">
        <Container className="w-full h-full  flex items-center ">
          <div className="w-[65%] space-y-6">
            <h1 className="text-[80px] font-semibold leading-[92px]">
              Embrace the future of finance
            </h1>

            <p className="font-semibold w-[90%]">
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation
            </p>
            <Button>Reach out to us</Button>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Hero;

// class="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none svelte-1lc7tvy"
