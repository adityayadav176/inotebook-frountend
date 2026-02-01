import React, {useContext, useState} from 'react'

import noteContext from '../context/notes/noteContext';

const NotesAdd = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({title:"", Description:"", tag:"default"})

    const handleClick = (e) =>{
      addNote(note.title, note.Description, note.tag);
      e.preventDefault();
    }
    const onChange = (e) => {
      setNote({...note, [e.target.name]: e.target.value})
    }
  return (
       <div className="container my-3">
        <h2>Add a Note</h2>
        <form className='my-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">Description</label>
            <input type="text" className="form-control" id="Description" name='Description' onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button>
        </form>
      </div>
  )
}

export default NotesAdd;
