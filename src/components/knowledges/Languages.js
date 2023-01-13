import React, { Component } from "react";
import Progressbar from "./Progressbar";


export default class Languages extends Component {

    state = {
        languages: [
            { id: 1, name: "Javascript/Typescript", xp: 3 },
            { id: 2, name: "Java", xp: 0.6 },
            { id: 3, name: "Python", xp: 2 },
            { id: 4, name: "PHP", xp: 1 },
        ],
        frameworks: [
            { id: 1, name: "Angular", xp: 1.5 },
            { id: 1, name: "React", xp: 0.4 },
            { id: 2, name: "Spring/Springboot", xp: 0.6 },
        ]
    }
    

    render() {
        const { languages, frameworks } = this.state;

        return (
            <div className="languagesFrameworks defaultLayout">
                <Progressbar 
                    languages={languages}
                    title="Langages" 
                />
                <Progressbar 
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="Frameworks et bibliothèques" 
                />
            </div>
        );
    }
}