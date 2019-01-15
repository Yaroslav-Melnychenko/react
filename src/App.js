import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/lessons/layout";
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => (
    <div>
        <Layout />
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Contacts = () => (
    <div>
        <h2>Contacts</h2>
    </div>
)

class App extends React.Component{
    render(){
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                    <BrowserRouter>
                        <div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contacts">Contacts</Link></li>
                            </ul>
                            <hr/>
                            <Route exact path="/" component={Home} />
                            <Route path="/about/" component={About} />
                            <Route path="/contacts" component={Contacts} />
                        </div>
                    </BrowserRouter>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;
