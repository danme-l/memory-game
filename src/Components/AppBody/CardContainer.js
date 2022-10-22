import React from 'react';
import Card from './Card';

const CardContainer = ({charList}) => {
    const handleGuess = () => {
        
    }

    return (
        <div id="cardContainer">
            {charList.map((char) => {
                return <Card 
                    key={char.id}
                    name={char.name}
                    imgUrl={char.imgUrl}
                    onClick={handleGuess}
                    />;
            })}
        </div>
    );
}

export default CardContainer;