import React from 'react';

const ToDo = (props) => {
    return (
    <div
        onClick={() => props.toggleTask(props.task.id)}
        ClassName={`task${props.task.completed ? "completed": ""}`}
    >
        <p>{props.task.task}</p>
    </div>
    )
}

export default ToDo
