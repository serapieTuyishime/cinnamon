import Image from "next/image";
import Link from "next/link";

export default function Offices() {
    const data = {
        images: ["/office1.jpeg", "/office2.jpeg", "/office2.jpeg"],
        offices: ["new yolk", "Belgrade", "Belgrade"],
        addresses: [
            "500 7th Ave, New York, NY 10018, United States",
            "Bulevar vojvode Mišića 37 11000, Belgrade, Serbia",
            "Bulevar vojvode Mišića 37 11000, Belgrade, Serbia",
        ],
    };
    return (
        <div className="overflow-hidden">
            <div className="container max-w-6xl mx-auto px-6 lg:px-0 grid gap-4 lg:gap-8 pt-24 lg:pt-36">
                <h1 className="text-4.3xl lg:text-5.5xl lg:mb-12 font-montBold">
                    Our offices
                </h1>
                <div className="inline-flex  gap-8">
                    {data.offices.map((key, index) => {
                        return (
                            <Link
                                href="/offices"
                                className="grid gap-4 hover:text-primary w-[544px] h-full"
                                key={index}
                            >
                                <Image
                                    height={378}
                                    width={544}
                                    src={data.images[index]}
                                    alt={data.images[index]}
                                    className="w-full"
                                />

                                <div className="flex items-baseline gap-4">
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        height="18"
                                        width="18"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <div className="grid">
                                        <label className="text-2xl font-montBold">
                                            {data.offices[index]}
                                        </label>
                                        <label>{data.addresses[index]}</label>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <div className="flex gap-10  max-w-max">
                    <Image
                        width={48}
                        height={27}
                        src="/left.png"
                        alt="Left"
                        className="hover:-translate-y-2 ease-in-out duration-500"
                    />
                    <Image
                        width={48}
                        height={27}
                        src="/right.png"
                        alt="Right"
                        className="hover:-translate-y-2 ease-in-out duration-500"
                    />
                </div>
            </div>
        </div>
    );
}
