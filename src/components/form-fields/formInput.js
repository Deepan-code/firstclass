import React from 'react';

export const FormInput = (props) => {
    return <div>
        <input
            id={props.id}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            type={props.type} 
            placeholder={props.placeholder}
            className={props.className}
            />
    </div>
}


