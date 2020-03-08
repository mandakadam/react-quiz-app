import React from 'react';

const Result =({score, response, restart})=>{
    return(<div>
        
        <h2 className="result">Your score is {score} / {response} </h2>
        <button className="playBtn" onClick={restart}>Play Quiz Again.</button>
    </div>)
}

export default Result