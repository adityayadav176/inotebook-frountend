import NoteContext from "./noteContext";
import { useState, setNotes } from "react";

const NoteState = (props) => {
    const notesIntial = [
        {
            "_id": "697cbd81f59e5a5bfdsfsf0ae76664",
            "user": "697b2db9d73bc0e9dsds0fd8e925",
            "title": "instagram",
            "description": "instagram is dangeros for children",
            "tag": "personal",
            "date": "2026-01-30T14:17:37.310Z",
            "__v": 0
        },
        {
            "_id": "697cbd81f59e5a5ffdsdfdsffffdfdb0ae76666",
            "user": "697b2db9d73bc0fdfdsdfe90fd8e925",
            "title": "instagram",
            "description": "instagram is dangeros for children",
            "tag": "personal",
            "date": "2026-01-30T14:17:37.520Z",
            "__v": 0
        },
        {
            "_id": "697cbd81f59e5a5ffdsfdfdb0ae76664",
            "user": "697b2db9d73bcfdfdsffd0e90fd8e925",
            "title": "instagram",
            "description": "instagram is dangeros for children",
            "tag": "personal",
            "date": "2026-01-30T14:17:37.310Z",
            "__v": 0
        },
        {
            "_id": "697cbd81f59e5afdfsdf5b0ae76666",
            "user": "697b2db9d73bcfdffsdd0e90fd8e925",
            "title": "instagram",
            "description": "instagram is dangeros for children",
            "tag": "personal",
            "date": "2026-01-30T14:17:37.520Z",
            "__v": 0
        },
        {
            "_id": "697cbd81f59e5ffsdfdfa5b0ae76664",
            "user": "697b2db9d73bcfsdfdfd0e90fd8e925",
            "title": "instagram",
            "description": "instagram is dangeros for children",
            "tag": "personal",
            "date": "2026-01-30T14:17:37.310Z",
            "__v": 0
        },
        {
            "_id": "697cbd81f59e5ffdsfdfda5b0ae76666",
            "user": "697b2db9d73bffsdfdfc0e90fd8e925",
            "title": "instagram",
            "description": "instagram is dangeros for children",
            "tag": "personal",
            "date": "2026-01-30T14:17:37.520Z",
            "__v": 0
        },
        {
            "_id": "697cbd81f59e5vffdfa5b0ae76664",
            "user": "697b2db9d73bfdfdfsdfc0e90fd8e925",
            "title": "instagram",
            "description": "instagram is dangeros for children",
            "tag": "personal",
            "date": "2026-01-30T14:17:37.310Z",
            "__v": 0
        },
        {
            "_id": "697cbd81fcdffdf59e5a5bghfgh0ae76666",
            "user": "697b2db9d73bc0ffddfsdfe90fd8e925",
            "title": "instagram",
            "description": "instagram is dangeros for children",
            "tag": "personal",
            "date": "2026-01-30T14:17:37.520Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesIntial)

    //ADD A NOTE
    const addNote = (title, description, tag) => {
        // TODO API CALL
        notes = {
            "_id": "697cbd81fcdffdf59e5a5bghfgh0aeasd76666",
            "user": "697b2db9d73bc0ffddfsdfe90fd8e925",
            "title": "instagram [added]",
            "description": "instagram is dangeros for children [ADDED] ",
            "tag": "personal",
            "date": "2026-01-30T14:17:37.520Z",
            "__v": 0
        }
        setNotes(notes.push(notes))
    }
    //DELETE A NOTE
    const deleteNote = () => {

    }
    //EDIT NOTE
    const editNote = () => {

    }
    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;