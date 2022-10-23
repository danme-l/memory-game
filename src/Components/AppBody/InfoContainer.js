import React, { useState} from 'react';

const InfoContainer = ({curScore, bestScore, getUserCardNumber}) => {
    const [cardNum, setCardNum] = useState(10);

    const handleChange = (e) => {
        e.preventDefault();
        setCardNum(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getUserCardNumber(cardNum);
    }

    return (
        <div id='infoContainer'>
            <table id="scoreTable">
                <tbody>              
                    <tr>
                        <th>Current Total Score</th>
                        <th>High Score</th>
                    </tr>
                    <tr>
                        <td>{curScore}</td>
                        <td>{bestScore}</td>
                    </tr>
                </tbody>
            </table>
            <div id="setNumCardsArea">
                <h3> Difficulty </h3>
                <form name="cardNumberInput" id="cardNumberInput" onSubmit={handleSubmit}>
                    <label htmlFor="quantity">Quantity (between 4 and 20):</label>
                    <input type="number" id="quantity" name="quantity" min="4" max="20" onChange={handleChange}/>
                    <input type="submit" value="Go!" />
                </form>
            </div>
        </div>
    );
}

export default InfoContainer;