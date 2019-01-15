import React from "react";
import "../components/squere.css";

class Squere extends React.Component{

    clickSquere(){
        console.log('click');
    }

    render(){
        return(
            <div onClick={this.clickSquere} className="squere"></div>
        );
    }
}
export default Squere;
