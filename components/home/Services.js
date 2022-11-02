import Service from "./Service";
import Button from "../general/Button";

export default function Services() {
    return (
        <div className="px-20 grid dark-area grid-cols-3 grid-rows-3 pt-44">
            <h1 className="row-span-3 text-5.5xl font-montBold">
                Our services
            </h1>
            <div className="col-start-2 row-start-1 ">
                <Service
                    img="/ic1.png"
                    title="Product design"
                    paragraph="Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes."
                />
            </div>
            <div className="col-start-3 row-start-1">
                <Service
                    img="/ic2.png"
                    title="Development"
                    paragraph="By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."
                />
            </div>
            <div className="col-start-2 row-start-2 mt-16">
                <Service
                    img="/ic3.png"
                    title="Quality assurance"
                    paragraph="Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing."
                />
            </div>
            <div className="col-start-3 row-start-2 mt-16">
                <Service
                    img="/ic4.png"
                    title="Marketing & growth"
                    paragraph="By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people."
                />
            </div>
            <div className="col-start-2 row-start-3 h-2/5 flex items-end pl-24">
                <Button text="see our services" />
            </div>
        </div>
    );
}
