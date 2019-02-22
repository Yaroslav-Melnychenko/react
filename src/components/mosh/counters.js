import React from "react";
import Counter from './counter';

class Counters extends React.Component{
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 4},
            {id: 3, value: 0},
            {id: 4, value: 6},
            {id: 5, value: 3},
            {id: 6, value: 123}
        ]
    }

    handleDelete(counteId){
        const counters = this.state.counters.filter(c => c.id !== counteId);
        this.setState({counters});
    }

    handleReset(){
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    }

    handleIncrement(id){
        const counters = [...this.state.counters];
        counters.map(function(c){
            if(c.id === id){
                c.value = c.value + 1;
            }
        });
        this.setState({counters: counters});
    }

    render(){
        return(
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.handleReset.bind(this)}
                >Reset</button>
                { this.state.counters.map((counter) =>
                    <Counter
                        value={counter.value}
                        counterId={counter.id}
                        onDelete={this.handleDelete.bind(this)}
                        key={counter.id}
                        handleIncrement = {this.handleIncrement.bind(this)}
                    />) }
            </div>
        );
    }
}

export default Counters;
