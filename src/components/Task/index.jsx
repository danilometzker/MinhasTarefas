import React from "react";
import { CgCheck, CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import './style.css';

const Task = ({task, handleTaskClick, handleTaskRemove}) => {

    const history = useHistory();

    const handleContainerClick = () => {
        handleTaskClick(task.id);
    };

    const handleRemoveClick = (e) => {
        e.stopPropagation();
        handleTaskRemove(task.id);
    }

    const goDetailsClick = (e) => {
        e.stopPropagation();
        history.push(`/${task.id}`);
    }

    return (
        <div className={`task-container ${task.completed ? "completed" : ""}`} onClick={handleContainerClick}>

            <div className="task-title">
                <div className="check-task">
                    <div><CgCheck size={20}/></div>
                </div>
                <span>{task.title}</span>
            </div>
            
            <div className="task-actions">
                <button onClick={goDetailsClick}>
                    <div><CgInfo size={20}/></div>
                </button>
                
                <button onClick={handleRemoveClick}>
                    <div><CgClose size={20}/></div>
                </button>
            </div>

        </div>
    );
};

export default Task;