import MainCard from "@/components/maincard";
import MoreInformation from "@/components/moreinformation";
import OurServices from "@/components/ourservices";
import bgImage from "@/public/bg1.png";
import Image from "next/image";
import { Link } from "@heroui/link";

export default function Home() {
  return (
    <div className="w-full bg-cover bg-center no-scroll">
      <Image fill src={bgImage} alt="background image"/>
      <div className="fixed top-48 left-0 md:left-2 w-1/2 md:w-1/3">
        <MainCard />
      </div>
      <div className="fixed right-0 bottom-10 md:right-10 md:w-64" >
        <OurServices />
      </div>
    <div className="fixed left-0 md:left-2 bottom-10 md:bottom-14 w-1/2 md:w-1/3">
      <MoreInformation />
    </div>
    <div className="fixed left-0 bottom-0 w-full h-8 bg-white dark:bg-black text-center ">
            <footer className=" flex items-center justify-center py-1 ">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://www.silvabak.co.za"
                title="silvabak.co.za homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">Silvabak Cloud Tech</p>
              </Link>
            </footer>
    </div>
    </div>
  );
}
