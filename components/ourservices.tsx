"use client";
import { Card, CardBody, CardHeader } from "@heroui/card";

export default function OurServices() {
    return(
        <Card className="bg-transparent">
            <CardHeader className="border text-xs md:text-sm font-medium">SERVICES RENDERED</CardHeader>
            <CardBody>
                <div className="flex flex-col gap-2 text-xs md:text-sm">
                    <p>Immunizations</p>
                    <p>Antenatal Care</p>
                    <p>Postnatal Care</p>
                    <p>Child Birth</p>
                    <p>Family Planning</p>
                    <p>Petogen|Depo</p>
                    <p>Nuristerate</p>
                    <p>Triphasils x 3pkts</p>
                    <p>Nordette x 3pkts</p>
                    <p>Implanon</p>
                </div>
            </CardBody>
        </Card>
    );
}