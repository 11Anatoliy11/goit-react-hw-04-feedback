import React, { Component } from 'react';
// import Controls from './Controls';
// import Value from './Value';
// import './Counter.css';
import Notification from './Notification/Notification';

export class Counter extends React.Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    static propTypes = {
        //
    }

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }))
    }

    handleNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }))
    }

    handleBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }))
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }


    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return Math.round(good / this.countTotalFeedback() * 100);
    }



    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div className="Counter" >
                <div className='Counter__controls'>
                    <button type='button' onClick={this.handleGood}>Good</button>
                    <button type='button' onClick={this.handleNeutral}>Neutral</button>
                    <button type='button' onClick={this.handleBad}>Bad</button>
                </div>
                <div className='Statistics'>
                    <h1>Statistics</h1>
                    <p className='item'>Good: {good}</p>
                    <p className='item'>Neutral: {neutral}</p>
                    <p className='item'>Bad: {bad}</p>
                    <p className='item'>Total: {this.countTotalFeedback()}</p>
                    <p className='item'>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>
                </div>
            </div >
        )
    }
}