import { Card, CardHeader, CardBody } from "@heroui/card";
import LocationIcon from "./locationicon";
import PhoneIcon from "./phoneicon";

export default function MoreInformation() {
  return (
    <Card className="bg-transparent">
      <CardHeader className="border text-xs md:text-sm lg:text-lg font-semibold">CONTACT US</CardHeader>
      <CardBody>
        <div className="flex flex-col gap-1">
        <p className="text-xs md:text-sm lg:text-lg px-4">Sr Bongi Moralo</p>
        <div className="flex text=xs">
          <LocationIcon />
          <p className="text-xs md:text-sm lg:text-lg"> 6 Tandelsberg Street, Albertsdal</p>
        </div>
        <div className="flex text-xs md:text-sm lg:text-lg">
          <PhoneIcon />
          <p>  +27 67 406 3606</p>
        </div>
        </div>
      </CardBody>
    </Card>
  );
}
