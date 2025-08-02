import MainCard from "@/components/maincard";
import MoreInformation from "@/components/moreinformation";
import OurServices from "@/components/ourservices";
import bgImage from "@/public/bg1.png";
import Image from "next/image";
import { Link } from "@heroui/link";

export default function Home() {
  return (
    <div>
        <Image fill src={bgImage} alt="background image" />
        <div className="fixed top-44 md:top-44 lg:top-52 left-1 md:left-2 lg:left-4 xl:left-24 w-36 md:w-1/3 lg:w-1/3">
          <MainCard />
        </div>
        <div className="fixed right-1 bottom-10 md:bottom-8 lg:bottom-12 xl:bottom-16 md:right-6 lg:right-10 md:w-64 lg:w-1/3">
          <OurServices />
        </div>
        <div className="fixed left-1 md:left-2 lg:left-2 xl:left-24 bottom-10 md:bottom-12 lg:bottom-14 xl:bottom-20 w-1/2 md:w-1/3 lg:w-1/3">
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
