"use client";
import { Card, CardBody, CardHeader } from "@heroui/card";

export default function OurServices() {
    return(
        <Card className="bg-transparent">
            <CardHeader className="border font-medium text-xs md:text-sm lg:text-xl xl:text-2xl">SERVICES RENDERED</CardHeader>
            <CardBody>
                <div className="flex flex-col gap-2 md:gap-1 lg:gap-0 text-xs md:text-sm lg:text-lg xl:text-2xl">
                    <p>Immunizations</p>
                    <p>Antenatal Care</p>
                    <p>Postnatal Care</p>
                    <p>Child Birth</p>
                    <p>Family Planning and more</p>
                </div>
            </CardBody>
        </Card>
    );
}