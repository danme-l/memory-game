import React from 'react';

const InfoContainer = ({curScore, bestScore}) => {
    return (
        <div id='infoContainer'>
            <h2>Your current score is: {curScore}</h2>
            <h2>Your best score is: {bestScore}</h2>
        </div>
    );
}

export default InfoContainer;