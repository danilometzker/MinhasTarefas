import { React, useEffect, useState, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CgCheck } from "react-icons/cg";
import Button from "../Button";

import "./style.css";

const Details = ({tasks}) => {
    const params = useParams();
    const history = useHistory();

    const [currentTask, setCurrentTask] = useState({ });
    const [error404, setError404] = useState(false);

    const renderTask = useCallback(() => {
        const findTask = tasks.filter( task => task.id === params.taskId);
        if(findTask.length > 0){
            setCurrentTask(findTask[0]);
        }else{
            setError404(true);
        }
    }, [params.taskId, tasks]);

    useEffect(() => {
        renderTask();
    }, [renderTask]);


    const handleBackClick = () => {
        history.goBack();
    }

    return (
        <div className="details-container">

            <Button title="Voltar" onClick={handleBackClick} />
            
            <div className={`task-details ${currentTask.completed && 'completed'}`}>
                {!error404 ? (
                    <>
                        <div className="details-title">
                            {currentTask.completed && (
                                <div className="details-completed">
                                    <CgCheck size={20}/>
                                </div>
                            )}
                            {currentTask.title}
                        </div>
                        <p>{currentTask.description}</p>
                    </>
                    ) : (
                        <div className="error">Tarefa não encontrada.</div>
                    )
                }
                

            </div>
        </div>
    );
}

export default Details;