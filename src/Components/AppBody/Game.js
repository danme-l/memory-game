import React, { useState, useEffect } from 'react';
import ScoreBoard from './ScoreBoard';
import CardContainer from './CardContainer';

/* eslint-disable */
const Game = () => {
    const [curScore, setCurScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [characters, setCharacters] = useState([]);
    const [guesses, setGuesses] = useState([]);

    const fetchChars = async (num) => {
        const charList = [];

        // to avoid ever getting the same character
        // generate *num* distinct ids first
        let ids = (() => {
            const arr = []
            while(arr.length < num){
                // 826 possible characters to get in the API
                var candidateID = Math.floor(Math.random() * 826) + 1
                if(arr.indexOf(candidateID) === -1) {
                    arr.push(candidateID)
                }
            }
            return(arr)
        })();

        for (let i=0;i<ids.length;i++) {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${ids[i]}`);
            const data = await response.json();
            const id = data.id;
            const name = data.name
            const imgUrl = data.image;
            charList.push({
                'id': id,
                'name': name,
                'imgUrl': imgUrl, 
            });
        }

        return charList;
    }

    // thanks gfg
    // https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
        
            // Generate random number
            var j = Math.floor(Math.random() * (i + 1));
                        
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
            
        return array;
     }

    const handleGuess = (e) => {
        // whatever was guessed, that ID should be put in the guess list
        let guessedID = e.target.parentNode.id
        setGuesses(guesses.concat(guessedID));

        // set the scores
        if (guesses.includes(guessedID)) {
            handleLoss();
        } else {
            setCurScore(curScore + 1);
            if (curScore >= bestScore) {
                setBestScore(curScore+1);
            }
        }
        console.log(guesses);
        
        // shuffle cards
        shuffleArray(characters);
    }

    const handleLoss = () => {
        setCurScore(0);
        setGuesses([]);
        alert('You lose!')
    }
    
    useEffect(() => {
        const loadCards = async () => {
            setCharacters(await fetchChars(10))
          }
          loadCards()
      }, []);

    return (
        <div>
            <ScoreBoard 
                curScore={curScore}
                bestScore={bestScore}
                />

            <CardContainer 
                charList={characters}
                handleGuess={handleGuess} 
                />
        </div>
    );
}

export default Game;