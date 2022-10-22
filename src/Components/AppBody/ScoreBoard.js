import React from 'react';

const ScoreBoard = ({curScore, bestScore}) => {
    return (
        <div id='scoreBoard'>
            <h2>Your current score is: {curScore}</h2>
            <h2>Your best score is: {bestScore}</h2>
        </div>
    );
}

export default ScoreBoard;