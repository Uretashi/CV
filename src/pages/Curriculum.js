import React from "react";
import CurriculumEntry from "../components/curriculum/CurriculumEntry";
import { curriculumData } from "../data/curriculumData";

export default function App() {

    return (
        <div className="curriculum-main-div">
            <h1>Cursus</h1>
            <div className="curriculum-data-content-parent">
                {
                    curriculumData.map(entry => <CurriculumEntry key={entry.id} entry={entry} />)
                }
            </div>
        </div>
    )
}