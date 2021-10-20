import React, { useState } from "react";
import Button from "../Button";

import './style.css';

const TaskForm = ({handleTaskAddition}) => {
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    const handleTitleChange = (e) => {
        let value = e.target.value;
        setTitleInput(value);
    }
    const handleDescriptionChange = (e) => {
        let value = e.target.value;
        setDescriptionInput(value);
    }

    const handleTaskSubmit = () => {
        handleTaskAddition(titleInput, descriptionInput);
        setTitleInput("");
        setDescriptionInput("");
    };

    return(
        <div className="task-form">
            <textarea onChange={handleDescriptionChange} rows={2} placeholder="Preencha com os detalhes da tarefa" value={descriptionInput} />
            <div className="row">
                <input type="text" placeholder="Título da tarefa" onChange={handleTitleChange} value={titleInput}/>
                <Button title="Adicionar" customClass="task-button" onClick={handleTaskSubmit} />
            </div>
        </div>
    );
}

export default TaskForm;