import React from 'react';
import Brick from "./brick";

class Bricks extends React.Component{

    number = 3;

    state = {
        number: this.number
    }

    add(){
        this.number++;
        this.setState({
            number: this.number
        });
    }

    render(){
        let brick = [];
        for(let i = 0; i < this.state.number; i++){
            brick.push(<Brick key={i} />);
        }
        return(
            <div>
                <p><button onClick={this.add.bind(this)} className="btn btn-primary">+ Add</button></p>
                <div className="block-container">
                    {brick}
                </div>
            </div>
        );
    }

}
export default Bricks;
