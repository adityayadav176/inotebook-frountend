import NoteContext from "./noteContext";
import { useState, setNotes } from "react";

const NoteState = (props) =>{
    const notes = [
  {
    "_id": "697cbd81f59e5a5b0ae76664",
    "user": "697b2db9d73bc0e90fd8e925",
    "title": "instagram",
    "description": "instagram is dangeros for children",
    "tag": "personal",
    "date": "2026-01-30T14:17:37.310Z",
    "__v": 0
  },
  {
    "_id": "697cbd81f59e5a5b0ae76666",
    "user": "697b2db9d73bc0e90fd8e925",
    "title": "instagram",
    "description": "instagram is dangeros for children",
    "tag": "personal",
    "date": "2026-01-30T14:17:37.520Z",
    "__v": 0
  },
   {
    "_id": "697cbd81f59e5a5b0ae76664",
    "user": "697b2db9d73bc0e90fd8e925",
    "title": "instagram",
    "description": "instagram is dangeros for children",
    "tag": "personal",
    "date": "2026-01-30T14:17:37.310Z",
    "__v": 0
  },
  {
    "_id": "697cbd81f59e5a5b0ae76666",
    "user": "697b2db9d73bc0e90fd8e925",
    "title": "instagram",
    "description": "instagram is dangeros for children",
    "tag": "personal",
    "date": "2026-01-30T14:17:37.520Z",
    "__v": 0
  },
   {
    "_id": "697cbd81f59e5a5b0ae76664",
    "user": "697b2db9d73bc0e90fd8e925",
    "title": "instagram",
    "description": "instagram is dangeros for children",
    "tag": "personal",
    "date": "2026-01-30T14:17:37.310Z",
    "__v": 0
  },
  {
    "_id": "697cbd81f59e5a5b0ae76666",
    "user": "697b2db9d73bc0e90fd8e925",
    "title": "instagram",
    "description": "instagram is dangeros for children",
    "tag": "personal",
    "date": "2026-01-30T14:17:37.520Z",
    "__v": 0
  },
   {
    "_id": "697cbd81f59e5a5b0ae76664",
    "user": "697b2db9d73bc0e90fd8e925",
    "title": "instagram",
    "description": "instagram is dangeros for children",
    "tag": "personal",
    "date": "2026-01-30T14:17:37.310Z",
    "__v": 0
  },
  {
    "_id": "697cbd81f59e5a5b0ae76666",
    "user": "697b2db9d73bc0e90fd8e925",
    "title": "instagram",
    "description": "instagram is dangeros for children",
    "tag": "personal",
    "date": "2026-01-30T14:17:37.520Z",
    "__v": 0
  }
]
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
             {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;