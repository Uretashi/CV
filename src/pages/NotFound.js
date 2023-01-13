import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function App() {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h3>La page donnée n'existe pas mi amigo</h3>
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} />
                    <span>Accueil</span>
                </Link>
            </div>
        </div>
    )
}

export default App;