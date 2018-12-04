import React from "react";

class Counter extends React.Component{

    state = {
        value: this.props.value
    }

    clickIncrement(){
        this.setState({value: this.state.value + 1})
    }

    returnClicks() {
        if(this.state.value === 0){
            return <span className="badge badge-warning">Zero</span>;
        }else{
            return <span className="badge badge-light">{this.state.value}</span>;
        }
    }

    render(){
        return (
            <div className="mt-3">
                <button onClick={this.clickIncrement.bind(this)} type="button" className="btn btn-primary">
                    Clicks {this.returnClicks()}
                </button>
                <button onClick={this.props.onDelete} className="btn btn-danger btn-sm ml-3">Delete</button>
            </div>
        )
    }
}
export default Counter;
