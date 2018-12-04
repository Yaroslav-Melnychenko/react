import React from "react";

class Counter extends React.Component {

    state = {
        count: 3
    };

    formatCount(){
        return this.state.count !== 0 ? this.state.count : 'Zero';
    }

    render(){
        return(
            <div>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </div>
        )
    }
}
export default Counter;
