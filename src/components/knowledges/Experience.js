import React from 'react';


const Experience = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="experience defaultLayout">
            <h3>Expérience</h3>
            <div className="exp-1">
                <h4>Développeur d'application - Watteko</h4>
                <div className="techno-year-div">
                    <h5>2020-{currentYear}</h5>
                    <h6>Python - Angular</h6>
                </div>
                <p>
                    Embauché suite à la recherche d'une alternance, j'ai très rapidement était mis sur un projet
                    qui avait pour but le traitement et la récupération de données depuis des fichiers PDF
                </p>
            </div>
            <div className="exp-2">
                <h4>Devéloppeur Web / Logiciel - Enedis (prestation Watteko) </h4>
                <div className="techno-year-div">
                    <h5>2021-{currentYear}</h5>
                    <h6>Angular - Java - Python</h6>
                </div>
                <p>
                    Suite à l'année passée auprès de Watteko, j'ai pu intégrer Enedis par le biais d'une mission
                    en prestation. Principalement intervenu en tant que développeur Web, je me suis vu confier des
                    missions de type robot automatisé en Python, ainsi que la reprise d'un logiciel développé en Java
                </p>
            </div>
        </div>
    );
};

export default Experience;