import Image from "next/image";

export default function Service({
    img = "/ic1.png",
    title = "product design",
    paragraph = "Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes.",
}) {
    return (
        <div className="grid gap-6  pl-24">
            <Image src={img} height={48} width={48} alt={img} />
            <h2 className="font-montBold text-2xl">{title}</h2>
            <p className="text-light ">{paragraph}</p>
        </div>
    );
}
