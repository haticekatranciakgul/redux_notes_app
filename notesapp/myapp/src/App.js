import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import InputSection from './components/InputSection';
import NoteSection from './components/NotesSection';



function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>My Notes</h1>
        <InputSection></InputSection>
      </div>
      <div className='line'></div>
      <NoteSection></NoteSection>

    </Provider>

  );
}

export default App;
