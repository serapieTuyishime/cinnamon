import Image from "next/image";
import Button from "../general/Button";
export default function Agile() {
    return (
        <div className="relative bg-fog">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-8 px-6  py-22 lg:py-40 max-w-6xl container mx-auto ">
                <h1 className="text-4.3xl lg:text-5.5xl sm:w-3/5 font-montBold leading-snug">
                    Agile team on demand
                </h1>
                <div className="lg:w-3/4 font-montSemiBold grid text-grey gap-12 lg:gap-6">
                    By hiring and managing talented people with skills specific
                    to your project, we build you a team that’s accomplished,
                    agile and scalable in both directions.
                    <Button text="see how it works" />
                </div>
            </div>
            <Image
                height={220}
                width={338}
                src="/art1.png"
                className="lg:absolute -bottom-3 right-0"
            />
        </div>
    );
}
