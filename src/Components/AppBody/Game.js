import React, { useState, useEffect } from 'react';
import InfoContainer from './InfoContainer';
import CardContainer from './CardContainer';
import WinLossBox from './WinLossBox';

/* eslint-disable */
const Game = () => {
    const initialNum = 7;
    const [curScore, setCurScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [numCards, setNumCards] = useState(initialNum);
    const [characters, setCharacters] = useState([]);
    const [guesses, setGuesses] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [gameWon, setGameWon] = useState(false);
    const [gameLost, setGameLost] = useState(false);
    const [cardsVisible, setCardsVisible] = useState(true);

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
        // don't let anyone guess if the game is over
        if (gameWon || gameLost) {
            return;
        }

        // whatever was guessed, that ID should be put in the guess list
        let guessedID = e.target.parentNode.id
        setGuesses(guesses.concat(guessedID));

        // set the scores
        if (guesses.includes(guessedID)) {
            handleLoss();
        }  else {
            if (guesses.length + 1 === characters.length) { // if we've guessed all the characters available
                handleWin();
            }
            setCurScore(curScore + 1);
            if (curScore >= bestScore) {
                setBestScore(curScore+1);
            }
        }
        
        // shuffle cards
        shuffleArray(characters);
    }

    const handleLoss = () => {
        setCardsVisible(false);
        setCurScore(0);
        setGuesses([]);
        setGameLost(true);        
    }

    const handleWin = () => {
        setCardsVisible(false);
        setGameWon(true);
    }

    const getUserCardNumber = (n) => {
        setNumCards(n);
        resetGame();
    }

    const resetGame = () => {
        setGameWon(false);
        setGameLost(false);
        setGuesses([]);
        setCurScore(0);
        setCardsVisible(true);
    }


    useEffect(() => {
        const loadCards = async () => {
            setCharacters(await fetchChars(numCards))
          }
          
          // I like the Rick gif I wanna see it 
          setTimeout(() => {
            setLoading(false);
          }, 1200);          
          loadCards();
      }, [numCards]);

    if (isLoading) {
        return (
            <div>
                <h1> Loading...</h1>
                <iframe src="https://giphy.com/embed/IgpAALi5hEv1IFmCrZ" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rickandmorty-season-1-adult-swim-rick-and-morty-IgpAALi5hEv1IFmCrZ">via GIPHY</a></p>
            </div>
        )
    }

    return (
        <div id="gameBox">
            <InfoContainer 
                curScore={curScore}
                bestScore={bestScore}
                getUserCardNumber={getUserCardNumber}
                />

            <CardContainer 
                charList={characters}
                handleGuess={handleGuess} 
                isVisible={cardsVisible}
                />

            <WinLossBox 
                id="winLossBox"
                gameWon={gameWon}
                gameLost={gameLost}
                />
        </div>
    );
}

export default Game;