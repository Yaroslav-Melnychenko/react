import React from 'react';
import './brick.css';

class Brick extends React.Component{

    state = {
        width: '100px',
        height: '100px',
        backgroundColor: '#F5B73F'
    }

    constructor(){
        super();
    }

    getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    changeStyle(){
        this.setState({
            backgroundColor: 'rgb(' + this.getRandomInt(0, 255) + ', ' + this.getRandomInt(0, 255) +', ' + this.getRandomInt(0, 255) + ')'
        });
    }

    render(){
        return(
            <div onMouseDown={this.changeStyle.bind(this)} style={this.state} className="block"></div>
        );
    }
}
export default Brick;
