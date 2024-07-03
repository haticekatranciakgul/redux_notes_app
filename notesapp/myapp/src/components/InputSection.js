import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../redux/actions/noteActions';
import inputActions from '../redux/actions/inputActions';
import './InputSection.style.scss';


const InputSection = () => {
  const id = useSelector(state => state.inputs.id);
  const title = useSelector(state => state.inputs.title);
  const content = useSelector(state => state.inputs.content);
  const dispatch = useDispatch();


  const addNote = () => {
   if(title && content) {
    dispatch(noteActions.addNote({
      title,
      content
    }))
    dispatch(inputActions.resetInputs())
   }
  }

    return (
      <div className='InputSection_container'>
        <input 
        type='text' 
        placeholder='Note title'
        value={title}
        onChange={ e => 
          dispatch(inputActions.setInputTitle(e.target.value))
        }
        >

        </input>
        <textarea
          placeholder='Note Content'
          value={content}
          onChange={ e => 
            dispatch(inputActions.setInputContent(e.target.value))
          }
        >
        </textarea>
        <button
        onClick={addNote}
        > 
        { id === -1 ? "ADD NOTE" : "UPDATE NOTE"}
        </button>

        <button
        
        >
          DELETE NOTE
        </button>


      </div>
    );
  
};

export default InputSection
