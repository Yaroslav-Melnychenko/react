import React from "react";

class Color extends React.Component{
    render(){
        return(
            <div className="choose-color mt-2">
                <li className="bg-red"></li>
                <li className="bg-green"></li>
                <li className="bg-blue"></li>
                <li className="bg-yellow"></li>
            </div>
        )
    }
}
export default Color;
