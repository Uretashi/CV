import { faCodepen, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";


function alertAfterCopy(isEmail=false) {
    alert((isEmail ? "Email" : "Numéro") + " copié dans le presse papier !");
}

function App() {
    return (
        <div className="contact">
            <div className="contactContent">
                <div className="header">
                    <div className="contactBox">
                        <h1>Contact me ( ͡° ͜ʖ ͡°)</h1>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faMarker} />
                                <span>Chez moi</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} />
                                <CopyToClipboard text="00.00.00.00.00">
                                    <span className="clickInput" onClick={() => alertAfterCopy()}>
                                        00.00.00.00.00
                                    </span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <CopyToClipboard text="test@test.com">
                                    <span className="clickInput" onClick={() => alertAfterCopy(true)}>
                                        test@test.com
                                    </span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                    <div className="socialNetwork">
                        <ul>
                            <li>
                                <a href="google.com" target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faLinkedin} /></i>
                                    <h4>Linkedin</h4>
                                </a>
                            </li>
                            <li>
                                <a href="google.com" target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faGithub} /></i>
                                    <h4>Github</h4>
                                </a>
                            </li>
                            <li>
                                <a href="google.com" target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faTwitter} /></i>
                                    <h4>Twitter</h4>
                                </a>
                            </li>
                            <li>
                                <a href="google.com" target="_blank" rel="noopener noreferrer">
                                    <i><FontAwesomeIcon icon={faCodepen} /></i>
                                    <h4>Codepen</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="img-content"></div>
            </div>
        </div>
    )
}

export default App;