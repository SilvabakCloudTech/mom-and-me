import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import Image from "next/image";


export const Navbar = () => {

  return (
    <HeroUINavbar className="bg-pink-200 flex justify-between items-end rounded-lg" >
      <NavbarContent className="flex flex-row justify-start">
      <Image className="rounded-full object-contain" width={40} height={40} src="/bongekapic.jpg" alt="profile picture"/>
          <p className="text-stone-500 font-serif text-xl md:text-2xl font-semibold">MOM & ME CLINIC</p>
      </NavbarContent>
      <NavbarContent className="flex justify-end items-center">
        <p>Practice No. 1217364</p>
          <p>SANC No. 15895451</p>
      </NavbarContent>
    </HeroUINavbar>
  );
};
