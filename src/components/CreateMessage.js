import React, { useState } from 'react'
import { Messages } from './Messages'
// import Button from 'react-bootstrap/Button';

export const CreateMessage = () => {
    const [NewThought, setNewThought] = React.useState({
        title: "",
        message: ""
    }) 
    const [AllThoughts , setAllThoughts] = React.useState([])

    const handleThoughtState = (e) => {
        const value = e.target.value;
        const title = e.target.name
        setNewThought(
            {
                ...NewThought,
                [title]: value
            }
        )
    }

    const handleThoughtCreate = (event) => {
        event.preventDefault();
    
        if (NewThought.title == "" || NewThought.message == "") {
            alert("Title or Message can't be blank");
        }
        else{
            setAllThoughts([...AllThoughts, NewThought])
            setNewThought(
                {
                    title: "",
                    message: ""
                }
            )
            console.log({AllThoughts})
        }
        
    }

    const AllThoughtsDisplay = AllThoughts.slice(0).reverse().map(
        msg => {
            return (
                <Messages MessageTitle={msg.title} MessageMsg={msg.message}/>
            )
        }
    )

    return (
        <div>
            <form>
                <label>
                    Title:
                    <input
                    type="text"
                    name="title"
                    onChange={handleThoughtState}
                    value={NewThought.title || ""} />
                </label>
                <label>
                    Message:
                    <input
                    type="text"
                    name="message"
                    onChange={handleThoughtState}
                    value={NewThought.message || ""} />
                </label>
                <input type="submit" value="Submit" onClick={handleThoughtCreate}/>
            </form>            

            <div>
                {AllThoughtsDisplay}
            </div>
        </div>
    )
}