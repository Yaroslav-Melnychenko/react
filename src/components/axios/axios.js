import React from "react";
import axios from 'axios';

class PersonList extends React.Component {

    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then( rez => {
            console.log(rez);
            this.setState({ persons: rez.data });
        } );
    }

    render() {
        return(
            <ul>{ this.state.persons.map( (person) => <li key={ person.id }>{ person.name }</li> ) }</ul>
        );
    }
}
export default PersonList;
