import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";


export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false
        };
    }


    handleInfo = () => {
        this.setState({ showInfo: !this.state.showInfo });
    }

    render() {
        let { name, languages, languagesIcon, source, info, picture } = this.props.item;
        return (
            <div className="project">
                <div className="icons">
                    {
                        languagesIcon.map(icon => <FontAwesomeIcon icon={icon} key={icon} />)
                    }
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="image of .... u know" onClick={this.handleInfo}></img>
                <span className="infos" onClick={this.handleInfo}>
                    <i>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </i>
                </span>
                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <p className="text">{info}</p>
                                    <div className="sourceCode">
                                        <a href={source}
                                            rel="noopener noreferrer"
                                            className="boutton"
                                            target="_blank"
                                        >
                                            Code source du projet
                                        </a>
                                    </div>
                                    <div className="button return" onClick={this.handleInfo}>
                                        Retour à la page
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}