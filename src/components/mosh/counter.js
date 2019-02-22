import React from "react";

class Counter extends React.Component{

    render(){
        let classes = "badge m-2 badge-";
        classes += ( this.props.value === 0) ? "warning" : "primary";
        return(
            <div>
                <span className={classes}>{this.props.value}</span>
                <button onClick={ () => this.props.handleIncrement(this.props.counterId) } className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counterId)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }
}

export default Counter;
