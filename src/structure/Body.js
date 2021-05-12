/* eslint-disable eqeqeq */
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
            numOfWrongAnswer: -1,
            typeOfWrongAnswer: '',
            data: (new Answers()).get()
        }
        this.renderSwitchParam = this.renderSwitchParam.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.setWrongAnswer = this.setWrongAnswer.bind(this);
        this.setRightAnswer = this.setRightAnswer.bind(this);
        this.renderAnswer = this.renderAnswer.bind(this);
        this.renderWrongAnswer = this.renderWrongAnswer.bind(this);
        this.update = this.update.bind(this);
    }
    update() {
        window.location.href = '';
    }
    renderAnswer(key, index) {
        return (
            <form className="accent-form">
                {this.renderSwitchParam(key, this.state.data[key][index])}
            </form>
        );
    }
    renderWrongAnswer() {
        return (
            <div className="wrong-answer">
                <p className="wrong-answer__text">
                    Неправильный ответ!
                </p>
                <p className="wrong-answer__true-answer true-answer">
                    Правильный ответ: <b className="true-answer__value">{this.state.data[this.state.typeOfWrongAnswer][this.state.numOfWrongAnswer][1]}</b>
                </p>
                <button className="btn btn-update" onClick={this.update} autoFocus>Обновить</button>
            </div>
        );
    }
    setWrongAnswer(type, num) {
        this.setState({isWrongAnswer: true, numOfWrongAnswer: num, typeOfWrongAnswer: type});
    }
    setRightAnswer() {
        this.setState({isWrongAnswer: false});
    }
    sendForm(event) {
        event.preventDefault();
        var field = document.querySelector('.answer-field');
        var numQuest = document.querySelector('.question-word').classList[1].split('-')[1];
        var type = document.querySelector('.question').classList[1].split('-')[1];
        if (field.value !== this.state.data[type][numQuest][1]) {
            this.setWrongAnswer(type, numQuest);
        }
        else {
            this.setRightAnswer();
        }
        field.value = '';
    }
    renderSwitchParam(type, data) {
        var index = this.state.data[type].indexOf(data);
        switch (type) {
            case 'oneLetter':
                return (
                    <div className="accent-form-wrapper">
                        <p className={"question quest-" + type}>На какую букву падает ударение в слове <b className={"question-word quest-" + index}>{data[0]}</b></p>
                        <input type="text" placeholder="Введите ответ" className="answer-field" autoFocus />
                        <button type="submit" className="send-form-field" onClick={this.sendForm}>Проверить</button>
                    </div>
                );
            case 'whatSyllable':
                return (
                    <div className="accent-form-wrapper">
                        <p className={"question quest-" + type}>На какой слог падает ударение в слове <b className={"question-word quest-" + index}>{data[0]}</b></p>
                        <input type="text" placeholder="Введите ответ" className="answer-field" autoFocus />
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
            element = this.renderWrongAnswer();
        }
        else {
            element = this.renderAnswer(key, randomInt(0, key.length-1));
        }
        return (
            <div>{element}</div>
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