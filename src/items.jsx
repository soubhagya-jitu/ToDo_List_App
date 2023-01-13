import React from 'react'

const items = (props) => {
    return (
        <>
            <div className="todo_style">
                <i className="fa-solid fa-circle-xmark" onClick = {()=> {
                    props.delete(props.id)
                }}></i>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default items