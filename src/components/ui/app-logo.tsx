import Image from "next/image";

const AppLogo = () => {
  return (
    <div>
      <Image src={"/logo.svg"} alt="logo" height={27} width={170} />
    </div>
  );
};

export default AppLogo;
