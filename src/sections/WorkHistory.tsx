import { HTMLAttributes } from "react";
import Section from "../components/Section";
import { myWorkHistory, showWorkHistory, WorkDesc } from "../portfolio";

const WorkSummary = (details: WorkDesc) => {
    return (
        <div
            className="bg-slate-800 p-4 rounded-xl shadow-md md:mx-24"
        >
            <div
                id='summary-header'
                className="py-2 px-6 flex flex-col gap-2"
            >
                <div className="flex justify-between items-center">
                    <span
                        className="text-2xl font-semibold"
                    >
                        {details.title}
                    </span>
                    <span
                        className="text-sm md:text-md font-light"
                    >
                        {details.location}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span
                        className="text-md md:text-lg font-semibold"
                    >
                        {details.company}
                    </span>
                    <span
                        className="text-sm md:text-md italic"
                    >
                        {details.from} - {details.to}
                    </span>
                </div>
            </div>
            <ul className="list-disc list-inside m-8">
                {details.desc.map(d => (
                    <li>{d}</li>
                ))}
            </ul>
        </div>
    )
}

const WorkHistory = (props: HTMLAttributes<HTMLElement>) => {
    return (
        showWorkHistory ?
        <Section
            id='workhistory'
            {...props}
        >
            <Section.CenterTitle>Work History</Section.CenterTitle>
            <Section.Body>
                <div
                    className="flex flex-col gap-8"
                >
                    {myWorkHistory.map(hist => WorkSummary(hist))}
                </div>
            </Section.Body>
        </Section> : <></>
    )
}

export default WorkHistory;