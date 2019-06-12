import React from 'react';

import './Person.css';

const Person = ( props ) => {
    return (
        <div key='222' className="Person">
            <p key='234' onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p key='rgf'>{props.children}</p>
            <input key= 'ty' type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Person;