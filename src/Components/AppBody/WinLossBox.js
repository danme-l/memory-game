import React from "react";

const WinLossBox = ({gameWon, gameLost}) => {
    if (gameWon) {
        return (
            <div>
                <h1>Victory</h1>
                <iframe src="https://giphy.com/embed/Qs0QEnugOy0xIsFkpD" width="480" height="270"></iframe>
            </div>
        )
    } else if (gameLost) {
        return (
            <div>
                <h1>Loser!</h1>
                <iframe src="https://giphy.com/embed/fvfRNXU8gkH0sLvDzQ" width="480" height="270"></iframe>
            </div>
        )
    }
    
}

export default WinLossBox;