import Image from "next/image";
import { FC } from "react";

type TAppLogo = {
  isDark?: boolean;
};

const AppLogo: FC<TAppLogo> = ({ isDark }) => {
  return (
    <div>
      <Image
        src={isDark ? "/logo-dark.svg" : "/logo.svg"}
        alt="logo"
        height={27}
        width={170}
      />
    </div>
  );
};

export default AppLogo;
