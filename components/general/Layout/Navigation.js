import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "../Button";

export default function Navigation() {
    const [pageScrolled, setpageScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 50 ? setpageScrolled(true) : setpageScrolled(false);
        }
    };

    return (
        <div
            className={`navigation w-full flex gap-8 px-20 py-4 items-center justify-around container mx-auto sticky top-0 z-10  ${
                pageScrolled ? "text-dark bg-white" : "dark-area "
            }`}
        >
            <Link href="/" className="w-1/3">
                {pageScrolled ? (
                    <Image
                        src="/logo-dark.svg"
                        height={20}
                        width={160}
                        alt="Logo area"
                    />
                ) : (
                    <Image
                        src="/logo-white.svg"
                        height={20}
                        width={160}
                        alt="Logo area"
                    />
                )}
            </Link>
            <div className="flex font-montSemiBold  gap-8 capitalize">
                <Link href="/projects">Projects</Link>
                <Link href="/services">Services</Link>
                <Link href="/about">About us</Link>
                <Link href="/careers">Careers</Link>
                <Link href="/blog">Blog</Link>
            </div>
            <div className="flex items-center gap-8">
                <div className="rounded-full hover:bg-primary">
                    <Image
                        src="/play.svg"
                        height={46}
                        width={46}
                        alt="Play button"
                    />
                </div>
                <Button text="contact us" />
            </div>
        </div>
    );
}
