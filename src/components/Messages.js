import React from 'react'
// import Button from 'react-bootstrap/Button';

export const Messages = (props) => {
    
    return (
        <div>
            <h3>{props.MessageTitle}</h3>
            <h3>{props.MessageMsg}</h3>
        </div>
    )
}