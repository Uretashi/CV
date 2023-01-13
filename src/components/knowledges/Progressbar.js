import React from 'react';


const Progressbar = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Année(s) d'expérience</span>
                <div className="yearsBars">
                    <span>1 an</span>
                    <span>2 ans</span>
                    <span>3 ans</span>
                </div>
            </div>
            <div>
                {
                    props.languages.map(l => {
                        const xpYears = 3;
                        const percentBar = ((l.xp / xpYears) * 100 - 3) + "%";

                        return (
                            <div key={l.id} className="languagesList">
                                <li>{l.name}</li>
                                <div className="progressBar" style={{ width: percentBar }}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Progressbar;