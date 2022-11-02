import Image from "next/image";

export default function Testimonials() {
    return (
        <div className="flex flex-col lg:flex-row px-6 lg:px-20 pt-14 pb-22 lg:py-32 ">
            <div className="grid gap-10">
                <h1 className="text-3xl sm:text-4xl lg:text-4.3xl font-montBold leading-snug lg:w-4/5 ">
                    They’re consistent, and the communication is good.
                </h1>
                <p className="text-grey lg:w-4/5">
                    When I have a deadline, they would work extra hours on the
                    weekend and after hours. Cinnamon gives the impression of
                    being a smaller team that’s focused on customers.
                </p>
                <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
                    <Image
                        width={68}
                        height={68}
                        alt="testimony"
                        src="/ceo.png"
                    />
                    <div className="flex flex-col content-center">
                        <span className="text-2xl font-montBold">
                            Garin Toren,
                        </span>
                        <span className="text-lg">CEO, ping</span>
                    </div>
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
            <div className="lg:w-1/4 flex flex-col pt-8 justify-between">
                <Image src="/ping.png" width={200} height={67.94} alt="ping" className="hidden lg:inline-block" />
                <div className="text-primary flex gap-3 items-center ">
                    <Image
                        width={11.3}
                        height={7.53}
                        src="/arrow-right.svg"
                        alt="Arrow"
                    />
                    <span className="underline underline-offset-8 uppercase font-montBold">
                        view case study
                    </span>
                </div>
            </div>
        </div>
    );
}
