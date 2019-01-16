import React from "react";
import './taskmanager.css';
import Color from './color.js';

class TaskManager extends React.Component{

    render(){
        return(
            <div className="taskmanager">
                <h3>Notes App</h3>
                <div className="add-wrap mt-4">
                    <label>Add title</label>
                    <input type="text" className="form-control" />
                    <label className="mt-4">Add description</label>
                    <textarea className="form-control" rows="5"></textarea>
                    <p className="mt-4">Choose color</p>
                        <Color />
                    <button className="btn btn-primary mt-3">Add task</button>
                </div>
            </div>
        )
    }

}
export default TaskManager;
