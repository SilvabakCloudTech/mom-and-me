import { Card, CardBody, CardHeader } from "@heroui/card";

export default function MainCard() {
    return(
  <Card className="bg-transparent">
    <CardHeader className="border bg-transparent font-mono text-xs md:text-sm font-medium">MOM & BABY HEALTH IS OUR PRIORITY</CardHeader>
    <CardBody className="bg-transparent font-mono text-xs md:text-sm ">
      Welcome to our clinic! We are dedicated to providing the best care for mothers and their babies. Our team of experienced professionals is here to support you every step of the way.
    </CardBody>
  </Card>
    );
}