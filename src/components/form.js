import React from "react";

class Form extends React.Component {

    state = {
        inputValue: ''
    }

    handleSubmit(){

    }

    handleClick(){
        this.setState({inputValue: 'new'})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input onKeyDown={this.handleClick.bind(this)} value={this.state.inputValue} type="text" placeholder="Text" />
                <button>Go!</button>
            </form>
        );
    }
}
export default Form;
