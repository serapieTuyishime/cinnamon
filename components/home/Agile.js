import Image from "next/image";
import Button from "../general/Button";
export default function Agile() {
    return (
        <div className="grid grid-cols-2 gap-8 px-20 relative py-40 bg-fog">
            <h1 className="text-5.5xl w-3/5 font-montBold leading-snug">Agile team on demand</h1>
            <div className="w-3/5 grid text-grey gap-6">
                By hiring and managing talented people with skills specific to
                your project, we build you a team that’s accomplished, agile and
                scalable in both directions.
                <Button text="see how it works" />
                <Image
                    height={220}
                    width={338}
                    src="/art1.png"
                    className="absolute -bottom-3 right-0"
                />
            </div>
        </div>
    );
}
