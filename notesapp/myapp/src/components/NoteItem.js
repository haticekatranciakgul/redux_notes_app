import React from "react";
import './NoteItem.style.scss'


const NoteItem =({title, content}) =>{
    return (
        <div className="NoteItem_container">
            <h2>{title}</h2>
            <p>{content}</p>


        </div>
    )

} 

export default NoteItem;