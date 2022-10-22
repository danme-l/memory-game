import React, { useState, useEffect } from 'react';
import ScoreBoard from './ScoreBoard';
import CardContainer from './CardContainer';

const Game = () => {
    const [curScore, setCurScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [characters, setCharacters] = useState([]);

    const fetchChars = async (num) => {
        const charList = [];

        for (let i=0;i<num;i++) {
            let charId = Math.floor(Math.random() * 826) // 826 possible characters to get in the API
            const response = await fetch(`https://rickandmortyapi.com/api/character/${charId}`);
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

            <CardContainer charList={characters} />
        </div>
    );
}

export default Game;