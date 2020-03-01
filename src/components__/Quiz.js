import React, { Component } from 'react';
import  './../assets/style.css';
import quizService from './../api/quizService';
import QuestionsBox from './QuestionsBox';
import Result from './Result';

class Quiz extends Component{
    state = {
        questionBank: [],
        score:0,
        responses:0
    }
    getQuestions(){
        quizService().then(questions =>{
            this.setState({
                questionBank: questions
            })
        });
    }
    computeAnswer = (answer, correct) =>{

        if(answer === correct){
            this.setState({
                score: this.state.score + 1
            })
        }
        else{
            console.log('Wrong')
        }

        this.setState({
            responses: this.state.responses < 5 ? this.state.responses+1 : 5
        })
    }
    restart(){
        this.getQuestions()
        this.setState({
            score: 0,
            responses:0
        })
    }
    componentDidMount(){
        this.getQuestions()
    }

    render(){
        return(
            <div className="container">
                <h2 className="title">React Quiz</h2>
                {
                this.state.responses === 5 ? <Result restart={()=>this.restart()} score={this.state.score} total={this.state.responses } /> : null
                }
                
                {
                    this.state.questionBank.length > 0 &&
                    this.state.responses < 5 &&
                    this.state.questionBank.map(({question, answers, correct, questionId})=>{
                        return (
                                <QuestionsBox 
                                key={questionId}  
                                questions={question} 
                                options={answers} 
                                correct={correct}  
                                selected={answer=>this.computeAnswer(answer, correct)}
                                />
                    )
                })
                }
            </div>
        )
    }
}

export default Quiz;