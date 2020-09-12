import React from 'react';
import './learningOptions.css';

function LearningOptions(props) {
    const options = [
        {text: 'Javascript', handler: props.actionProvider.handleJavascriptList, id: 6},
        {text: 'Mathematics', handler: () => {}, id: 1},
        {text: 'Physics', handler: () => {}, id: 2},
        {text: 'Algorithms', handler: () => {}, id: 3},
        {text: 'Machine Learning', handler: () => {}, id: 4},
        {text: 'Databases', handler: () => {}, id: 5},
    ]
    return (
        <div className="learning_options_container">
            {options.map(option => (
                <button className="learning_option_button" key={option.id} onClick={option.handler}>
                    {option.text}
                </button>
            ))}
        </div>
    );
}

export default LearningOptions;
