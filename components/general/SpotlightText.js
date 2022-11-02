export default function SpotlightText({
    list = ["none", "wow"],
    titleFractions = ["This life no balance"],
    paragraph = "Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website.",
}) {
    return (
        <div className="grid gap-6 px-20 py-4 mb-36">
            <ul className="flex gap-6 text-grey text-xs font-montBold">
                {list.map((item, index) => {
                    return (
                        <li key={index} className="uppercase">
                            {item}
                        </li>
                    );
                })}
            </ul>
            <ul className="font-montBold text-4.3xl grid gap-4">
                {titleFractions.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
            <label className="text-grey w-[70%]">{paragraph}</label>
        </div>
    );
}
