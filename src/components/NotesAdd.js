import React, {useContext, useState} from 'react'

import noteContext from '../context/notes/noteContext';

const NotesAdd = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({title:"", Description:"", tag:""})

    const handleClick = (e) =>{
      addNote(note.title, note.Description, note.tag);
      e.preventDefault();
      setNote({title:"", Description:"", tag:""})
         props.showAlert("Added successfully", "success");
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
            <input type="text" className="form-control" id="title" name='title' minLength={5} required  aria-describedby="emailHelp" value={note.title} onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">Description</label>
            <input type="text" className="form-control" id="Description" name='Description' minLength={5} required  value={note.Description} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" minLength={5} required  name='tag' value={note.tag} onChange={onChange} />
          </div>
          <button disabled={note.title.length<5 || note.Description.length <5 || note.tag.length <5} type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button>
        </form>
      </div>
  )
}

export default NotesAdd;
