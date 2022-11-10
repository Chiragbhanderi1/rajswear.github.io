import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";


const LogoIcon = () => {
  return (
    <Link href="/">
        <Image src={'/logo.ico'} height={100} width={100} className='m-auto' alt="Logo"/>
    </Link>
  );
};

export default LogoIcon;
