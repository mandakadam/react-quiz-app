import React, { Component } from 'react';
import './assets/style.css';
import quizService from './api/quizService';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

class Quiz extends Component{
    state = {
        questionBank: [],
        score:0,
        response:0
    }
    getQuizeService(){
        quizService().then(resp => {
            this.setState({
                questionBank: resp
            })
        })
    }
    restart(){
        this.getQuizeService()
        this.setState({
            score: 0,
            response:0
        })
    }
    computeScore = (selected, correct) =>{
        if(selected === correct){
            console.log('Correct')
            this.setState({
                score: this.state.score+1
            })
        }

        this.setState({
            response: this.state.response+1
        })
    }
    componentDidMount(){
        this.getQuizeService()
    }
    render(){
    
        return(
            <div className="container">
                <h2 className="title">React Quiz </h2>
               { 
               
                (this.state.response === 5)  ? <Result score={this.state.score} response={this.state.response}  restart={()=>this.restart()}/> : null
               }

                {
                    (this.state.response < 5) &&
                    (this.state.questionBank.length) &&
                    this.state.questionBank.map( ({question, answers, questionId, correct}) => {
                        return(
                        <QuestionBox 
                        question={question} 
                        options={answers}  
                        key={questionId}
                        saveAnswer={(selected)=>this.computeScore(selected, correct)} 
                        />)
                    })
                }
            </div>
        )
    }
}

export default Quiz;