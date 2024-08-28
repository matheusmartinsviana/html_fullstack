import React from "react";
import "./card.css";

interface Character {
    image: string;
    id: number;
    name: string;
    status: string;
    gender: string;
}

interface CardProps {
    character: Character;
}

const Card: React.FC<CardProps> = ({ character }) => {
    return (
        <div className="cardComponent" key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
        </div>
    );
}

export default Card;
