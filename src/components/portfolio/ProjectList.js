import React, { Component } from "react";
import { portfolioData } from "../../data/PortfolioData";
import Project from "./Project";


export default class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: portfolioData,
            radios : [
                { id: 1, value: "javascript" },
                { id: 2, value: "css" },
                { id: 3, value: "react" },
                { id: 4, value: "php" }
            ],
            selectedRadio: "javascript" 
        }
    }

    handleRadio = (event) => {
        this.setState({ selectedRadio: event.target.value });
    }

    render() {
        let { projects, radios, selectedRadio } = this.state

        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map(radio => {
                            return (
                                <li key={radio.id}>
                                    <input 
                                        type="radio"
                                        name="radio"
                                        checked={radio.value === selectedRadio}
                                        value={radio.value}
                                        id={radio.id}
                                        onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="projects">
                    {
                        projects
                            .filter(item => item.languages.includes(selectedRadio))
                            .map(item => <Project key={item.id} item={item} />)
                    }
                </div>
            </div>
        )
    }
}