import React from 'react';

const Result = ({restart, score, total}) =>{
return(
<div>
    <h3 className="score">Your Score is {score} / {total}</h3>
    <button className="playBtn" onClick={restart}>Restart the quiz</button>
</div>
)
}

export default Result;