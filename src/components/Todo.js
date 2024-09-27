import React from 'react';

const ToDo = (props) => {
    console.log(props.task.id)
    return (
    <div
        onClick={() => props.toggleTask(props.task.id)}
        className={`task${props.task.completed ? "completed": ""}`}
    >
        <p>{props.task.task}</p>
    </div>
    )
}

export default ToDo
