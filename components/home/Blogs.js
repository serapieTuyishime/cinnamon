import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
    const data = {
        images: ["/blog1.webp", "/blog2.webp", "/blog3.webp"],
        titles: ["sales", "design", "development"],
        names: [
            "Matija Bermanec & Lorena Ujević",
            "Samantha Holstead",
            "jan marin",
        ],
        dates: ["2022-10-07", "2022-10-07", "2022-10-07"],
        times: ["6mins", "7mins", "10min"],
        headlines: [
            "Differences in Hiring an Agency vs. Freelancers 2.0",
            "Cinnamon Flutter Template Overview",
            "How Tinder Swindled User Experience",
        ],
    };
    return (
        <div className="grid gap-10 mx-20 py-40">
            <h1 className="w-2/5 text-5xl font-montBold mt-4">
                Stay in the loop on tech topics
            </h1>
            <div className="grid grid-cols-3 gap-8">
                {data.images.map((key, index) => {
                    return (
                        <Link
                            className="grid gap-4 hover:text-primary "
                            key={key}
                            href="/blogs"
                        >
                            <Image
                                height={192.18}
                                width={345}
                                alt={data.titles[index]}
                                src={data.images[index]}
                            />
                            <div className="uppercase font-montBold text-xs">
                                {data.titles[index]}
                            </div>
                            <div className="flex items-center gap-4 text-grey">
                                <span className="overflow-hidden whitespace-pre text-ellipsis w-1/3 capitalize">
                                    {data.names[index]}
                                </span>
                                <div className="h-1 w-1 bg-warning rounded-full"></div>
                                <span>{data.dates[index]}</span>
                                <div className="h-1 w-1 bg-warning rounded-full"></div>
                                <span>{data.times[index]}</span>
                            </div>
                            <div className="font-montBold text-2xl w-10/12 ">
                                {data.headlines[index]}
                            </div>
                        </Link>
                    );
                })}
            </div>
            <Link
                href="/blogs"
                className="text-primary flex gap-3 items-center "
            >
                <Image
                    width={11.3}
                    height={7.53}
                    src="/arrow-right.svg"
                    alt="Arrow"
                />
                <span className="underline underline-offset-8 uppercase font-montBold">
                    View more blogs
                </span>
            </Link>
        </div>
    );
}
