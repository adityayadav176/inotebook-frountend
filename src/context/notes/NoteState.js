import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
        
  //GET ALL NOTES
    const getNotes = async () => {
            //API CALL 
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk3YjJkYjlkNzNiYzBlOTBmZDhlOTI1In0sImlhdCI6MTc2OTY4MDM0M30.Z3HdkYgzM3GpcZ7R4PfZvyijoaFocvc_xhwXQLLuPKc'
            },
        });
        const json = await  response.json()
        setNotes(json)
    }


    //ADD A NOTE
    const addNote = async (title, description, tag) => {    
        // API CALL
            const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk3YjJkYjlkNzNiYzBlOTBmZDhlOTI1In0sImlhdCI6MTc2OTY4MDM0M30.Z3HdkYgzM3GpcZ7R4PfZvyijoaFocvc_xhwXQLLuPKc'
            },
            body: JSON.stringify({title, description, tag})
        });
     
         const note = await response.json() 
        setNotes(notes.concat(note))
    }
    //DELETE A NOTE
    const deleteNote = async(id) => {
        // API CALL
         const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk3YjJkYjlkNzNiYzBlOTBmZDhlOTI1In0sImlhdCI6MTc2OTY4MDM0M30.Z3HdkYgzM3GpcZ7R4PfZvyijoaFocvc_xhwXQLLuPKc'
            }
        });
        const json = await response.json()
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }
    //EDIT NOTE
    const editNote = async (id, title, description, tag) => {
      
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk3YjJkYjlkNzNiYzBlOTBmZDhlOTI1In0sImlhdCI6MTc2OTY4MDM0M30.Z3HdkYgzM3GpcZ7R4PfZvyijoaFocvc_xhwXQLLuPKc'
            },
            body: JSON.stringify({title, description, tag})
        });
        
        const json = await response.json();
        let newNotes = JSON.parse(JSON.stringify(notes))
        // logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }
    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;