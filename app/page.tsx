import MainCard from "@/components/maincard";
import MoreInformation from "@/components/moreinformation";
import OurServices from "@/components/ourservices";
import bgImage from "@/public/bg1.png";
import Image from "next/image";
import { Link } from "@heroui/link";

export default function Home() {
  return (
    <div className="w-full bg-cover bg-center">
      <Image fill src={bgImage} alt="background image" />
      <div className="fixed left-0 top-52 w-40 sm:top-60 md:top-1/4 lg:left-4 lg:top-64 sm:w-1/3 sm:h-full">
        <MainCard />
      </div>
      <div className="fixed right-2 bottom-24 md:bottom-20 lg:right-14 lg:bottom-24 w-52 sm:w-1/3 sm:right-14">
        <OurServices />
      </div>
    <div className="fixed left-0 bottom-20 md:bottom-10 lg:left-14 lg:bottom-24 w-52 sm:w-1/3 sm:left-14">
      <MoreInformation />
    </div>
    <div className="fixed left-0 bottom-0 w-full bg-white dark:bg-black text-center">
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">Silvabak Cloud Tech</p>
              </Link>
            </footer>
    </div>
    </div>
  );
}
