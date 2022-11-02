import Image from "next/image";
import Button from "../general/Button";

export default function Contact() {
    return (
        <div className="grid justify-items-center gap-4 relative content-center text-center py-36 bg-fog">
            <h1 className="text-5.5xl font-montBold">Have a project in mind?</h1>
            <h1 className="text-5.5xl font-montBold mb-4">
                Let's work together.
            </h1>
            <Button text="contact us" />
            <Image
                src="/art3.png"
                height={200}
                width={420}
                alt="Contact"
                className="absolute bottom-0 left-0"
            />
        </div>
    );
}
