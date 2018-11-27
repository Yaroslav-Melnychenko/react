import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/button";
import Form from "./components/form";
import Menu from "./components/menu";
import Tooltip from "./components/tooltip";
import Timer from "./components/timer";

class App extends React.Component{
    render(){
        return (
            <div>
                <Menu />
                <Tooltip text='Ты на меня навел!'>Наведи на меня!</Tooltip>
                <Timer />
            </div>
        )
    }
}
export default App;
