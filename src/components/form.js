import React from "react";

class Form extends React.Component {

    constructor(props){
        super(props);
        this.handleRadio = this.handleRadio.bind(this);
        this.state = {
            radioGroup: {
                angular: false,
                react: true,
                ember: false
            }
        };
        // this.helper();
    }

    helper(){
        setInterval(() => {
            console.log(this.state.radioGroup);
        }, 1000)
    }

    handleChange(e){
        console.log(e.target.value);
    }

    handleRadio(event){
        let obj = {};
        obj[event.target.value] = event.target.checked;
        this.setState({radioGroup: obj});
    }

    render(){
        return(
            <form>
                <input type="text" onChange={this.handleChange.bind(this)} />
                <input
                    type="radio"
                    value="anguler"
                    checked={this.state.radioGroup.angular}
                    onChange={this.handleRadio}
                />
                <input
                    type="radio"
                    value="react"
                    checked={this.state.radioGroup.react}
                    onChange={this.handleRadio}
                />
                <input
                    type="radio"
                    value="ember"
                    checked={this.state.radioGroup.ember}
                    onChange={this.handleRadio}
                />
            </form>
        );
    }
}
export default Form;
