import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faHiking, faMusic, faRunning } from '@fortawesome/free-solid-svg-icons';


const Hobbies = () => {
    return (
        <div className="hobbies defaultLayout">
            <h3>Centre d'intérêts</h3>
            <ul>
                <li>
                    <i><FontAwesomeIcon icon={faGamepad} /></i>
                    <span>Jeux vidéos</span>
                </li>
                <li>
                    <i><FontAwesomeIcon icon={faMusic} /></i>
                    <span>Musique</span>
                </li>
                <li>
                    <i><FontAwesomeIcon icon={faRunning} /></i>
                    <span>Course</span>
                </li>
                <li>
                    <i><FontAwesomeIcon icon={faHiking} /></i>
                    <span>Randonnée</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;