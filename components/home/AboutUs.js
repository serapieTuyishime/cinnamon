import Image from "next/image";
import Button from "../general/Button";
export default function AboutUs() {
    return (
        <div className="py-24 lg:py-60 pl-6 lg:pl-20  grid lg:flex items-center justify-between bg-fog">
            <div className="lg:w-3/5 grid gap-8 lg:gap-16 ">
                <h1 className="text-4.3xl lg:text-5.5xl font-montBold">
                    Who we are
                </h1>
                <p className="text-grey w-5/6 lg:w-2/3 ">
                    Meet our international teams made up of 86 innovators,
                    branched into 8 departments, that influence the market
                    throughout 20 different countries.
                </p>
                <div className="hidden lg:grid grid-cols-2 gap-8 font-montBold text-xl">
                    <label>Product design</label>
                    <label>Project management</label>
                    <label>Web development</label>
                    <label>Human resources</label>
                    <label>Mobile development</label>
                    <label>Sales</label>
                    <label>Quality assurance</label>
                    <label>Fluffy friends</label>
                    <label>Marketing</label>
                </div>
                <Image
                    height={444.06}
                    width={280}
                    alt="About us"
                    src="/project.png"
                    className="lg:hidden"
                />
                <Button text="read about us" />
            </div>
            <Image
                height={539.22}
                width={340}
                alt="About us"
                src="/project.png"
                className="hidden lg:inline-block"
            />
        </div>
    );
}
