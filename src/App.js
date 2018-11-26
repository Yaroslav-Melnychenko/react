import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from "./components/button";
import Form from "./components/form";
import Menu from "./components/menu";
import Tooltip from "./components/tooltip";

class App extends React.Component{
    render(){
        return (
            <div>
                <Menu />
                <Tooltip text='Ты на меня навел!'>Наведи на меня!</Tooltip>
            </div>
        )
    }
}
export default App;
