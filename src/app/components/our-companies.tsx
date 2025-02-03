import Container from "@/components/layout/container";
import { companies } from "@/constants";
import Image from "next/image";

const OurCompanies = () => {
  return (
    <Container className="mt-[128px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-x-6 gap-y-8 justify-items-center  items-center  ">
        {companies.map((url, i) => (
          <Image key={i} src={url} alt="company" width={176} height={121} />
        ))}
      </div>
    </Container>
  );
};

export default OurCompanies;
