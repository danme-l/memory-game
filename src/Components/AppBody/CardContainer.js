import React from 'react';
import Card from './Card';

const CardContainer = ({charList, handleGuess, isVisible}) => {
    if (isVisible) {   
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
    } else { return <div></div>}
}

export default CardContainer;