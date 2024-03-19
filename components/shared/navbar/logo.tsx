import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image
        src="/assets/images/site-logo.svg"
        alt="Devflow"
        height={23}
        width={23}
      />
      <p className="text-primary font-spaceGrotesk text-xl font-bold leading-8">
        Devflow
      </p>
    </Link>
  );
};

export default Logo;
