import Image from "next/image";
import Button from "../general/Button";

export default function College() {
    return (
        <div className="pl-6 lg:pl-20 grid lg:grid-cols-3 relative py-24 lg:py-32 gap-12 ">
            <Image
                src="/college.png"
                width={300}
                height={179.98}
                alt="cinnamon college"
            />
            <div className="text-grey grid content-center gap-8  lg:ml-8">
                Seize the unique opportunity to participate in a wide range of
                courses conducted by professionals with an impeccable reputation
                in the digital industry.
                <Button text="see how it works"/>
            </div>
            <Image
                className="hidden lg:block absolute bottom-0 right-0"
                src="/art2.png"
                width={556}
                height={402}
                alt="cinnamon college art"
            />
        </div>
    );
}
