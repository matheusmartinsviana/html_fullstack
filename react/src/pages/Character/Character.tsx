import React, { useState } from "react";
import Card from "../../components/Card/Card";
import "./character.css"

const Character: React.FC = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character", {
                method: "GET",
            });

            if (!response.ok) {
                const message = await response.json();
                return message;
            }

            const result = await response.json();

            setCharacters(result.results);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="charactersContainer">
            <button onClick={handleSubmit}>Get all characters</button>
            {loading && "Loading..."}
            <div className="CardsContainer">

                {characters && characters.map((character: any) => (
                    <Card character={character} />
                ))
                }
            </div>
        </div >
    );
};

export default Character;