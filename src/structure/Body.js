import React from 'react';
import Answers from '../answers/answers.js'

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
class CheckAccent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isWrongAnswer: false,
            data: new Answers()
        }
        this.renderSwitchParam = this.renderSwitchParam.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.setWrongAnswer = this.setWrongAnswer.bind(this);
        this.setRightAnswer = this.setRightAnswer.bind(this);
        this.renderAnswer = this.renderAnswer.bind(this);
        this.renderWrongAnswer = this.renderWrongAnswer.bind(this);
    }
    renderAnswer(key, index) {
        return (
            <form className="accent-form">
                {this.renderSwitchParam(key, this.state.data[key][index])}
            </form>
        );
    }
    renderWrongAnswer(key, index) {
        return (
            <div>
                <p>Неправильный ответ!</p>
                <p>Правильный ответ: <b>Пока не сделан</b></p>
            </div>
        )
    }
    setWrongAnswer() {
        this.setState({isWrongAnswer: false});
    }
    setRightAnswer() {
        this.setState({isWrongAnswer: true});
    }
    sendForm(event) {
        var field = document.querySelector('.answer-field');
        var numQuest = document.querySelector('.question-word').classList()[1].split('-')[1];
        var type = document.querySelector('.question').classList()[1].split('-')[1];
        if (field.value !== this.state.data[type][numQuest][1]) {
            this.setWrongAnswer();
        }
        else {
            this.setRightAnswer();
        }
        event.preventDefault();
    }
    renderSwitchParam(type, data) {
        var index = this.state.data[type].indexOf(data);
        switch (type) {
            case 'oneLetter':
                return (
                    <div className="accent-form-wrapper">
                        <p className={"question quest-" + type}>На какую букву падает ударение в слове <b className={"question-word quest-" + index}>{data[0]}</b></p>
                        <input type="text" placeholder="Введите ответ" className="answer-field" />
                        <button type="submit" className="send-form-field" onClick={this.sendForm}>Проверить</button>
                    </div>
                );
            case 'whatSyllable':
                return (
                    <div className="accent-form-wrapper">
                        <p className="question">На какой слог падает ударение в слове <b className="question-word">{data[0]}</b></p>
                        <input type="text" placeholder="Введите ответ" className="answer-field" />
                        <button type="submit" className="send-form-field" onClick={this.sendForm}>Проверить</button>
                    </div>
                );
            default:
                break;
        }
    }
    render() {
        var key = Object.keys(this.state.data);
        key = key[randomInt(0, key.length-1)];
        var element;
        if (this.state.isWrongAnswer) {
            element = this.renderWrongAnswer(key);
        }
        else {
            element = this.renderAnswer(key, randomInt(0, 14));
        }
        return (
            {element}
        );
    }
}

class Body extends React.Component {
    render() {
        return (
            <main className="main">
                <CheckAccent />
            </main>
        );
    }
}
export default Body;