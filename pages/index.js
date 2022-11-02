import Head from "next/head";
import Image from "next/image";
import Spotlight from "../components/general/Spotlight";
import SpotlightText from "../components/general/SpotlightText";
import AboutUs from "../components/home/AboutUs";
import Agile from "../components/home/Agile";
import Blogs from "../components/home/Blogs";
import Careers from "../components/home/Careers";
import College from "../components/home/College";
import Contact from "../components/home/Contact";
import Header from "../components/home/header";
import Offices from "../components/home/Ofiices";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className="container mx-auto">
            <Header />
            <Spotlight color="success" source="/hero1.png" />
            <SpotlightText
                list={["product design", "QUALITY ASSURANCE"]}
                titleFractions={[
                    "Corrily: Optimize prices",
                    "to maximize revenue",
                ]}
                paragraph="Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign."
            />
            <Spotlight color="violet" source="/hero2.png" />
            <SpotlightText
                list={["product design", "web development"]}
                titleFractions={["Fiona: Engage &", "Decide"]}
                paragraph="Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations."
            />
            <Spotlight color="warning" source="/hero3.png" />
            <SpotlightText
                list={[
                    "product design",
                    "web development",
                    "QUALITY ASSURANCE",
                ]}
                titleFractions={[
                    "Ukulele:",
                    "The largest ukulele tabs archive",
                ]}
                paragraph="Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website."
            />
             <Services />
            <Agile />
            <Testimonials />
            <AboutUs /> 
            <College />
            <Careers />
            <Offices />
            <Blogs /> 
            <Contact />

        </div>
    );
}
