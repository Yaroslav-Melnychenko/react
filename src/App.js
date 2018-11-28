import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Button from "./components/button";
// import Form from "./components/form";
// import Menu from "./components/menu";
// import Tooltip from "./components/tooltip";
// import Timer from "./components/timer";
import Todo from "./components/todo";

class App extends React.Component{
    render(){
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <Todo />
                    </div>
                </div>
            </div>
        )
    }
}
export default App;
