import React from 'react';

const Card = ({id, name, imgUrl}) => {
    return (
        <div className='card'>
            <h4 className='charNameBar'>{name}</h4>
            <img src={imgUrl} alt={name} />
        </div>
    );
}

export default Card;