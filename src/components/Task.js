import React from 'react';

const Task = (props) => {

    return (
        <div className="container">
            <div className="postHeader">
                <h2>{props.theme}</h2>
                <h2>{props.title}</h2>
            </div>
            <div>
                <strong>{props.tags}</strong>
                <p>{props.task}</p>
            </div>
        </div>
    );
};

export default Task;

