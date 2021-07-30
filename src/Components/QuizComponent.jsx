import { Button } from 'reactstrap';
import React, { Component } from 'react'
import allFunctions from "./Services/Functions.js"

export default class QuizComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizName: '',
            quizBox: [],
            isSubmitted:false,
            score:0,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
    }
    componentDidMount() {
        const quizName = this.props.match.params.quiz;
        this.setState({ quizName: quizName })
        allFunctions.getQuizByCategory(quizName).then(
            (response) => {
                console.log(response.data);
                this.setState({ quizBox: response.data })
            },
            (error) => {
                console.log(error);
            });
    }
    handleSubmit() {        
        console.log(this.state.quizBox)
        const id = JSON.parse(sessionStorage.getItem("user")).id;
        const username = JSON.parse(sessionStorage.getItem("user")).name;
        allFunctions.calculateScore(this.state.quizBox,id,username).then(
            (response)=>{
                console.log(response)
                this.setState({isSubmitted:true})
                this.setState({score:response.data.score})
            },
            (error)=>{
                console.log(error)
            }
        )
    }
    onChangeValue(event) {
        //console.log(event.target.value);
        const index = event.target.id;
        //console.log(event.target.id)
        const allquestions = this.state.quizBox;
        allquestions[index].choice = event.target.value;
        this.setState({ quizBox: allquestions });
    }
    render() {
        return (
            <div className="container">
                <h1>{this.state.quizName.toLocaleUpperCase()}{"  "}QUIZ</h1>
                <hr />
                <div className="quiz">
                    {this.state.quizBox.map((item, index) => (
                        <>
                            <p key={index}><b>(Q {index + 1}){item.qtitle}</b></p>
                            <div className="container" onChange={this.onChangeValue} >
                                <p><input type="radio" value={item.optionA} name={"answer" + index} id={index} /> {item.optionA}</p>
                                <p><input type="radio" value={item.optionB} name={"answer" + index} id={index} /> {item.optionB}</p>
                                <p><input type="radio" value={item.optionC} name={"answer" + index} id={index} /> {item.optionC}</p>
                                <p><input type="radio" value={item.optionD} name={"answer" + index} id={index} /> {item.optionD}</p>
                                {this.state.isSubmitted && <p style={{color:"green"}}>Correct answer is:{"  "}<b >{item.answer}</b></p>}                                
                            </div>
                            <hr />
                        </>
                    ))                    
                    }
                    {this.state.isSubmitted && <h4 style={{color:"green"}}>Your Score is:{"  "}<b >{this.state.score}</b></h4>}
                    {!this.state.isSubmitted &&<Button color="success " className="mb-2" onClick={this.handleSubmit} >Submit Your Answers</Button>}
                    {this.state.isSubmitted &&<Button color="success " className="mb-2" onClick={this.handleSubmit} disabled>Submit Your Answers</Button>}
                </div>
            </div>
        )
    }
}
