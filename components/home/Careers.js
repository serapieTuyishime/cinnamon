import Image from "next/image";
import Link from "next/link";
import Button from "../general/Button";

export default function Careers() {
    return (
        <div className="dark-area px-6 lg:px-20 py-28 lg:py-40 justify-between grid lg:flex gap-24">
            <div className="grid gap-8 lg:w-1/2 ">
                <h1 className="text-4xl lg:text-5.5xl font-montBold">We’re growing</h1>
                <p className="text-light lg:text-lg">
                    Jump on board with Cinnamon and get the privilege of working
                    on challenging projects for leading global companies! Make
                    the world a better, more connected place.
                </p>
                <Button text="see all positions" />
            </div>
            <div className="grid content-center gap-8 lg:w-2/5 ">
                <Link
                    className="flex items-center justify-between text-2xl font-montBold pb-8 lg:pb-3 border-b border-light "
                    href="/careers"
                >
                    Android developer
                    <Image
                        height={27}
                        width={48}
                        src="/arrowRightWhite.webp"
                        alt="left arrow white"
                        className=""
                    />
                </Link>
                <Link
                    className="flex items-center justify-between text-2xl font-montBold pb-3 border-b border-light "
                    href="/careers"
                >
                    Android developer
                    <Image
                        height={27}
                        width={48}
                        src="/arrowRightWhite.webp"
                        alt="left arrow white"
                        className=""
                    />
                </Link>
                <Link
                    className="flex items-center justify-between text-2xl font-montBold pb-3 border-b border-light "
                    href="/careers"
                >
                    Backend Development Team Lead
                    <Image
                        height={27}
                        width={48}
                        src="/arrowRightWhite.webp"
                        alt="left arrow white"
                        className=""
                    />
                </Link>
            </div>
        </div>
    );
}
