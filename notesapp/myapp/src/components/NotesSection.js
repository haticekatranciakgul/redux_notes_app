import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import inputActions from '../redux/actions/inputActions';
import NoteItem from './NoteItem';
import './NoteSection.style.scss';


const NoteSection = () => {

    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes.notes )

    const onItemClicked = (item, index) => {
        dispatch(inputActions.setInputId(index));
        dispatch(inputActions.setInputTitle(item.title));
        dispatch(inputActions.setInputContent(item.content));

    }

    if(notes.length === 0 ) {
        return(
            <div className='NoteSection_container_empty'>
                <p>There is no note yet. Please add one.</p>
            </div>    

        )
    }

    return (
        <div className='NoteSection_container'>
           {notes.map((item,index) => {
            if(item) {
                return(
                    <NoteItem key={index}
                    title={item.title}
                    content={item.content}
                    onItemClicked={()=> {
                       onItemClicked(item, index);
                    }}
                    ></NoteItem>
                )
            }
            
        })}
             
        </div>

    );
};

export default NoteSection;