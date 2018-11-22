import React from "react";

class Button extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {counter: 0}
    }

    handleClick(){
        this.setState({counter: ++this.state.counter})
    }

    render(){
        return(
            <div>
                <h3>Number of clicks is {this.state.counter}</h3>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}
export default Button;
