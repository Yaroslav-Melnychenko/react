import React from "react";
import "../components/todo.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle, faTrashAlt);

class Todo extends React.Component{

    state = {
        task: [
            {
                done: false,
                text: 'I need to call my boss'
            },
            {
                done: true,
                text: 'Go to post'
            },
            {
                done: false,
                text: 'Learn react'
            }
        ]
    }

    changeDone(done, i){
        this.setState(state => {
            state.task.map((value, j) => {

            });
        });
    }

    render(){

        return (
            <div className="todo-list">
                <h3>What you need to do?</h3>
                <div className="input-group mt-4">
                    <span className="input-group-btn main-input">
                        <input type="text" name="newTask" className="form-control" />
                    </span>
                    <button className="btn btn-primary main-button">Add task</button>
                </div>

                <div className="tasks-container mt-5">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Done</th>
                                <th scope="col">Task</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.task.map((value, key) =>
                                    <tr key={key}>
                                        <th scope="row">{key}</th>
                                        <td><FontAwesomeIcon onClick={this.changeDone.bind(this, value.done, key)} icon="check-circle" className={`custom-awasome-icon action-false done-${value.done}`} /></td>
                                        <td>{value.text}</td>
                                        <td><FontAwesomeIcon icon="trash-alt" className="custom-awasome-icon text-danger" /></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Todo;
