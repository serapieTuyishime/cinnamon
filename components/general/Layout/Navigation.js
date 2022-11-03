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
            className={`sticky top-0 z-10 ${
                pageScrolled ? "text-dark bg-white" : "dark-area text-white "
            }`}
        >
            <div
                className={`navigation max-w-6xl  flex gap-8 px-6 lg:px-0 py-4 items-center lg:justify-around justify-between container mx-auto   `}
            >
                <Link href="/" className="w-1/3 ">
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
                <div className="hidden lg:flex font-montSemiBold  gap-8 capitalize">
                    <Link href="/projects">Projects</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/about" className="whitespace-pre">
                        About us
                    </Link>
                    <Link href="/careers">Careers</Link>
                    <Link href="/blog">Blog</Link>
                </div>
                <div className="hidden lg:flex items-center gap-8">
                    <div className="rounded-full hover:bg-primary ">
                        {/* <Image
                            src="/play.svg"
                            height={46}
                            width={46}
                            alt="Play button"
                        /> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            fill="currentColor"
                            height="64"
                            viewBox="0 0 64 64"
                        >
                            <path d="M26 21v22l1.809.786 14.191-11v-1.572l-14.191-11L26 21zm2 2.058L39.381 32 28 40.942V23.058z" />
                            <path d="M32 0C23.453 0 15.417 3.33 9.374 9.375 3.329 15.417 0 23.453 0 32s3.329 16.583 9.374 22.626C15.417 60.671 23.453 64 32 64s16.583-3.33 22.627-9.375C60.671 48.583 64 40.547 64 32s-3.329-16.583-9.374-22.626C48.583 3.329 40.547 0 32 0zm21.213 53.212C47.546 58.879 40.013 62 32 62c-8.013 0-15.546-3.121-21.212-8.789C5.121 47.546 2 40.013 2 32s3.121-15.546 8.788-21.212C16.454 5.121 23.987 2 32 2s15.546 3.122 21.213 8.789C58.88 16.454 62 23.987 62 32s-3.12 15.546-8.787 21.212z" />
                        </svg>
                    </div>
                    <Button text="contact us" />
                </div>
                <Image
                    src="/menu.svg"
                    height={32}
                    width={32}
                    alt="Menu"
                    className="lg:hidden"
                />
            </div>
        </div>
    );
}
