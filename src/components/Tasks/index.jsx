import React from "react";
import Task from "../Task";

const Tasks = ({tasks, handleTaskClick, handleTaskRemove}) => {
    return (
        <>
            {tasks.map(task => <Task task={task} key={task.id} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove} />)}
        </>
    );
};

export default Tasks;