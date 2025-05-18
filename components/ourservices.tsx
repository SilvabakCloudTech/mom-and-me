"use client";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Listbox, ListboxItem } from "@heroui/listbox";

export default function OurServices() {
    return(
        <Card className="bg-transparent">
            <CardHeader className="border">SERVICES RENDERED</CardHeader>
            <CardBody>
                <Listbox className="sm:text-medium md:text-lg lg:text-xl xl:text-2xl">
                    <ListboxItem key="immu">Immunizations</ListboxItem>
                    <ListboxItem key="acare">Antenatal Care</ListboxItem>
                    <ListboxItem key="pcare">Antenatal Care</ListboxItem>
                    <ListboxItem key="cbirth">Child Birth</ListboxItem>
                    <ListboxItem key="fp">Family Planning</ListboxItem>
                    <ListboxItem key="pd">Petogen|Depo</ListboxItem>
                    <ListboxItem key="nur">Nuristerate</ListboxItem>
                    <ListboxItem key="tri">Triphasils x 3pkts</ListboxItem>
                    <ListboxItem key="nor">Nordette x 3pkts</ListboxItem>
                    <ListboxItem>Implanon</ListboxItem>
                </Listbox>
            </CardBody>
        </Card>
    );
}