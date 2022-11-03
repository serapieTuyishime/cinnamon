import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "../Button";

export default function Navigation() {
    const [pageScrolled, setpageScrolled] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

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
    const data = {
        links: ["/projects", "/services", "/about", "/careers", "/blog"],
        texts: ["projects", "services", "about us", "careers", "blog"],
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
                    {data.links.map((key, index) => {
                        return (
                            <Link
                                href={data.links[index]}
                                key={key}
                                className="hover:text-primary relative after:hidden hover:after:block after:absolute after:w-1.5 after:rounded-full after:h-1.5 after:bg-primary after:bottom-0 after:translate-y-4 after:right-8"
                            >
                                {data.texts[index]}
                            </Link>
                        );
                    })}
                </div>
                <div className="hidden lg:flex items-center gap-8">
                    <div className="rounded-full hover:bg-primary ">
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
                {modalVisible ? (
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="lg:hidden"
                        onClick={() => setModalVisible(false)}
                    >
                        <path
                            d="M24 8L8 24"
                            stroke="currentColor"
                            stroke-width="2.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M8 8L24 24"
                            stroke="currentColor"
                            stroke-width="2.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                ) : (
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="lg:hidden"
                        onClick={() => setModalVisible(true)}
                    >
                        <path
                            d="M5.33301 8H26.6663"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M5.33301 16H18.6663"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M5.33301 24H23.9997"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                )}
            </div>
            <div
                className={`w-screen h-screen absolute text-lg text-grey dark-area grid space-y-8 pt-8 text-center content-start ${
                    !modalVisible && "hidden"
                } `}
            >
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/services">Services</Link>
                <Link href="/about" className="whitespace-pre">
                    About us
                </Link>
                <Link href="/careers">Careers</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/blog">Contact us</Link>
            </div>
        </div>
    );
}
