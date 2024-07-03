import React from 'react';
import './InputSection.style.scss';

const InputSection = () => {
  
    return (
      <div className='InputSection_container'>
        <input type='text' placeholder='Note title'></input>
        <textarea
        placeholder='Note Content'
        >
        </textarea>
        <button> ADD NOTE </button>
      </div>
    );
  
};

export default InputSection
