import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactBook, faDatabase, faFolder, faHome, faSchool } from "@fortawesome/free-solid-svg-icons";
import { faCodepen, faLinkedin, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"


const Copyright = () => {
    return (
        <div>
            <p>
                © Tout droit reservé etc etc tu sais...
            </p>
        </div>
    );
}

const Navigation = () => {
    return (
        <>
            <div className="sidebar">
                <div className="id">
                    <div className="idContent">
                        <img src="./media/pic2.png" alt="weird looking cat"></img>
                        <h3>Henry Lapatatedouce</h3>
                    </div>
                </div>
                <div className="navigation">
                    <ul>
                        <li>
                            <i><FontAwesomeIcon icon={faHome} /></i>
                            <Link to=""><span>Accueil</span></Link>
                        </li>
                        <li>
                            <i><FontAwesomeIcon icon={faDatabase} /></i>
                            <Link to="knowledge"><span>Compétences</span></Link>
                        </li>
                        <li>
                            <i><FontAwesomeIcon icon={faSchool} /></i>
                            <Link to="curriculum"><span>Cursus</span></Link>
                        </li>
                        <li>
                            <i><FontAwesomeIcon icon={faFolder} /></i>
                            <Link to="portfolio"><span>Portfolio</span></Link>
                        </li>
                        <li>
                            <i><FontAwesomeIcon icon={faContactBook} /></i>
                            <Link to="contact"><span>Contact</span></Link>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faCodepen} />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </li>
                    </ul>
                    <div className="signature">
                        <p>
                            <Copyright />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;