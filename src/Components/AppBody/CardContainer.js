import React from 'react';
import Card from './Card';

const CardContainer = ({charList, handleGuess}) => {
    return (
        <div id="cardContainer">
            {charList.map((char) => {
                return <Card 
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    imgUrl={char.imgUrl}
                    handleGuess={handleGuess}
                    />;
            })}
        </div>
    );
}

export default CardContainer;