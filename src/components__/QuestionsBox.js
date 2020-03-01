import React, {useState} from 'react';

const QuestionsBox = ({questions, options, selected}) =>{
    const [answer, setAnswer] = useState(options);
    const button = React.createRef();

    return (
        <div className="questionBox">
           <h4 className="question">{questions}</h4>
           {
               answer.map((text, index)=>{
                   return(
                    <button 
                    className="answerBtn"
                    key={index} 
                    disabled={answer.length === 1}
                    onClick={()=>{
                        setAnswer([text]);
                        selected(text);
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

export default QuestionsBox;