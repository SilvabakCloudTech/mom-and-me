import { Card, CardBody, CardHeader } from "@heroui/card";
import PhoneIcon from "./phoneicon";

export default function MainCard() {
    return(
  <Card className="bg-transparent">
    <CardHeader className="border bg-transparent text-slate-400 font-mono text-font-bold sm:text-lg md:text-xl lg:text-3xl">MOM & BABY HEALTH IS OUR PRIORITY</CardHeader>
    <CardBody className="bg-transparent font-mono sm:text-medium md:text-lg lg:text-xl xl:text-2xl">
      Welcome to our clinic! We are dedicated to providing the best care for mothers and their babies. Our team of experienced professionals is here to support you every step of the way.
    <PhoneIcon/>
    </CardBody>
  </Card>
    );
}