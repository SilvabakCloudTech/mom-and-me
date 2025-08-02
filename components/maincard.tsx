import { Card, CardBody, CardHeader } from "@heroui/card";

export default function MainCard() {
    return(
  <Card className="bg-transparent">
    <CardHeader className="border bg-transparent font-mono font-medium text-xs md:text-sm lg:text-medium xl:text-xl 2xl:text-2xl">MOM & BABY HEALTH IS OUR PRIORITY</CardHeader>
    <CardBody className="bg-transparent font-mono text-xs md:text-sm lg:text-medium xl:text-xl 2xl:text-2xl">
      Welcome to our clinic! We are dedicated to providing the best care for mothers and their babies. Our team of experienced professionals is here to support you every step of the way.
    </CardBody>
  </Card>
    );
}