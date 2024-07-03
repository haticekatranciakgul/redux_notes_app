import React from 'react';
import { useSelector } from 'react-redux';
import './NoteSection.style.scss';
import NoteItem from './NoteItem';

const NoteSection = () => {


    const notes = useSelector(state => state.notes.notes )

    if(notes.length === 0 ) {
        return(
            <div className='NoteSection_container_empty'>
                <p>There is no note yet. Please add one.</p>
            </div>    

        )
    }

    return (
        <div className='NoteSection_container'>
           {notes.map((item,index) => (
             <NoteItem
             title={item.title}
             content={item.content}
             ></NoteItem>
           ))}
             
        </div>

    );
};

export default NoteSection;