import React from "react";
import "./style.css";

const Button = ({title, customClass="", onClick}) =>{
    return(
        <button onClick={onClick} className={`task-button ${customClass}`}>{title}</button>
    );
};

export default Button;