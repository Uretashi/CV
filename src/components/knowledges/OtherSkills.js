import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faLanguage } from '@fortawesome/free-solid-svg-icons';


const OtherSkills = () => {
    return (
        <div className="otherSkills defaultLayout">
            <h3>Autres compétences</h3>
            <div className="list">
                <ul>
                    <li>
                        <i><FontAwesomeIcon icon={faLanguage} /></i>
                        <span>Anglais professionel / Polonais</span>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faCheckSquare} /></i>
                        <span>Méthode Agile</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;