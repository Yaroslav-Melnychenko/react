import React from "react";

class TimerDisplay extends React.Component{
    render(){
        if(this.props.timeLeft === 0 || this.props.timeLeft === null){
            return <div></div>
        }else{
            return <h1>Осталось времени: {this.props.timeLeft}</h1>
        }
    }
}

class TimerButton extends React.Component{
    handleStartTimer(){
        return this.props.startTimer(this.props.time); 
    }
    render(){
        return <button onClick={this.handleStartTimer.bind(this)} className="btn btn-primary">{this.props.time}</button>
    }
}

class Timer extends React.Component{

    constructor(props){
        super(props);
        this.startTimer = this.startTimer.bind(this);
        this.state = {
            timeLeft: null,
            timer: null
        }
    }

    startTimer(TimeLeft){
        clearInterval(this.state.timer);
        let timer = setInterval(() => {
            var timeLeft = this.state.timeLeft - 1;
            if(timeLeft === 0){
                clearInterval(timer);
            }
            this.setState({
                timeLeft: timeLeft
            })
            return this.setState({timeLeft: timeLeft, timer: timer})
        }, 1000);
    }

    render(){
        return (
            <div className="mt-5">
                <h2>Timer</h2>
                <TimerButton time="5" startTimer="{this.startTimer}" />
                <TimerButton time="10" startTimer="{this.startTimer}" />
                <TimerButton time="15" startTimer="{this.startTimer}" />
                <TimerDisplay timeLeft={this.state.timeLeft}/>
            </div>
        )
    }
}
export default Timer;
