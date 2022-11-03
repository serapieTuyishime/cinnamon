import Image from "next/image";
import Button from "../general/Button";

export default function Contact() {
    return (
        <div className="grid justify-items-center gap-5 relative content-center text-center py-24 lg:py-36 bg-fog">
            <h1 className="hidden sm:block text-4.3xl lg:text-5.5xl font-montBold">Have a project in mind?</h1>
            <h1 className="text-4.3xl lg:text-5.5xl font-montBold mb-4">
                Let's work together.
            </h1>
            <Button text="contact us" />
            <Image
                src="/art3.png"
                height={200}
                width={420}
                alt="Contact"
                className="absolute bottom-0 left-0 hidden lg:block"
            />
            <Image
                src="/art3.png"
                height={100}
                width={210}
                alt="Contact"
                className="absolute bottom-0 left-0 sm:hidden"
            />
            <Image
                src="/art3.png"
                height={50}
                width={95}
                alt="Contact"
                className="absolute bottom-0 left-0 hidden sm:block"
            />
        </div>
    );
}
