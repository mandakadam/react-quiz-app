import React, {useState} from 'react';

const QuestionBox = ({question, options, saveAnswer}) =>{
    const [answer, setAnswer] = useState(options)

    return(
    <div className="questionBox">
        <h2 className="question">{question}</h2>
        {
            answer.map( (text, index) => {
                return(
                <button 
                className="answerBtn"
                key={index}
                disabled={answer.length === 1}
                onClick={()=>{
                    setAnswer([text])
                    saveAnswer(text)
                }}
                >   
                {text}
                </button>
                )
            })
        }
    </div>
    )
}

export default QuestionBox;