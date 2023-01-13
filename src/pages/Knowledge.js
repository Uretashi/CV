import React from 'react';
import Experience from "../components/knowledges/Experience";
import Hobbies from "../components/knowledges/Hobbies";
import Languages from "../components/knowledges/Languages";
import OtherSkills from "../components/knowledges/OtherSkills";


const Knowledge = () => {
    return (
        <div className="knowledges defaultLayout">
            <div className="knowledgesContent">
                <Experience />
                <OtherSkills />
                <Hobbies />
                <Languages />
            </div>
        </div>
    );
};

export default Knowledge;