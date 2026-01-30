import NoteContext from "./notes/noteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const s1 = {
        "name": "Aditya",
        "class": "5b"
    }
    const [state, setstate] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setstate({
                "name": "kartik yadav",
                "class": "six"
            })
        }, 3000);
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;