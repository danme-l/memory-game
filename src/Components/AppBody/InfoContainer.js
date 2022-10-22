import React, { useState} from 'react';

const InfoContainer = ({curScore, bestScore, setNewCards}) => {
    const [cardNum, setCardNum] = useState(10);

    const setUserCardNumber = (e) => {
        setCardNum(e.target.value);
        console.log(cardNum);
    }

    return (
        <div id='infoContainer'>
            <table id="scoreTable">
                <tbody>              
                    <tr>
                        <th>Current Total Score</th>
                        <th>Current Round Score</th>
                        <th>High Score</th>
                    </tr>
                    <tr>
                        <td>{curScore}</td>
                        <td>...</td>
                        <td>{bestScore}</td>
                    </tr>
                </tbody>
            </table>
            <form name="cardNumberInput" id="cardNumberInput">
                <label htmlFor="quantity">Quantity (between 4 and 20):</label>
                <input type="number" id="quantity" name="quantity" min="4" max="20" value={cardNum} onChange={setUserCardNumber} />
                <input type="submit" value="Go!" onClick={setNewCards}/>
            </form>
        </div>
    );
}

export default InfoContainer;