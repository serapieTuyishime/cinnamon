import Image from "next/image";
export default function Spotlight({
    color = "primary",
    source = "/hero1.png",
}) {
    return (
        <div
            className={`bg-${color} bg-opacity-70 max-w-6xl mx-auto overflow-hidden`}
        >
            <Image
                height={518.25}
                width={1120}
                alt={source}
                src={source}
                className="transition-all ease-in-out duration-300 hover:scale-110"
            />
        </div>
    );
}
