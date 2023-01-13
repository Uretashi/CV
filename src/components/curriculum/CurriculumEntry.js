import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { faCalendarCheck, faCertificate, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default class CurriculumEntry extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { schoolTitle, schoolLogo, level, levelName, mention, city, date } = this.props.entry;
        return (
            <div className="curriculum-entry">
                <h2 className="h2-title">
                    {levelName}
                    <br />
                    <span>{level}</span>
                </h2>
                <p className="mention">Mention {mention.value} <FontAwesomeIcon icon={faCertificate} color={mention.color} /></p>
                <div className="school-content">
                    <h2>{schoolTitle}</h2>
                    <div className="image-container">
                        <img src={schoolLogo}></img>
                    </div>
                </div>
                <div className="more-info-div">
                    <p><FontAwesomeIcon icon={faMapLocationDot} /> - {city}</p>
                    <p><FontAwesomeIcon icon={faCalendarCheck} /> - {date}</p>
                </div>
            </div>
        )
    }
}