import React from 'react';

const Card = ({id, name, imgUrl, handleGuess}) => {
    return (
        <div className='card' id={id}>
            <h4 className='charNameBar' onClick={handleGuess}>{name}</h4>
            <img src={imgUrl} alt={name}  onClick={handleGuess} />
        </div>
    );
}

export default Card;