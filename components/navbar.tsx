import {
  Navbar as HeroUINavbar,
  NavbarContent,
} from "@heroui/navbar";
import Image from "next/image";
import bongekapic from "@/public/bongekapic.jpg";


export const Navbar = () => {

  return (
    <HeroUINavbar className="bg-pink-200 flex justify-between items-end" >
      <NavbarContent className="flex flex-row justify-start">
      <Image className="rounded-full object-contain" width={40} height={40} src={bongekapic} alt="profile picture"/>
          <p className="text-stone-500 font-serif font-semibold md:text-2xl">MOM & ME CLINIC</p>
      </NavbarContent>
      <NavbarContent className="flex justify-end items-center font-mono md:font-medium md:text-md lg:text-xl">
        <p>Practice No. 1217364</p>
          <p>SANC No. 15895451</p>
      </NavbarContent>
    </HeroUINavbar>
  );
};
