import React from "react";
import Counter from "./counter";

class Counters extends React.Component{
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 1},
            {id: 3, value: 3},
            {id: 4, value: 0},
            {id: 5, value: 56},
            {id: 6, value: 0}
        ]
    }

    handleDelete(counterid){
        const counters = this.state.counters.filter(c => c.id !== counterid);
        this.setState({counters: counters});
    }

    handleReset(){
        console.log('Reset');
    }

    render(){
        return (
            <div>
            <button onClick={this.handleReset.bind(this)} className="btn btn-success b-3">Reset</button>
                {
                    this.state.counters.map( counter =>
                        <Counter onDelete={this.handleDelete.bind(this, counter.id)} key={counter.id} value={counter.value} /> )
                }
            </div>
        )
    }
}
export default Counters;
