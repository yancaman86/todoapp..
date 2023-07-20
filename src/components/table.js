import React, { useState } from "react";
import Main from './main'

function Table() {
    const [input, setInput] = useState("");
    const [inputs, setInputs] = useState([]);
    const [nextId, setNextId] = useState(1);

    const addInput = () => {
        if (input !== "") {
            const newInput = {
                id: nextId,
                text: input
            };
            setInputs([...inputs, newInput]);
            setInput("");
            setNextId(nextId + 1);
        }
    };

    const deleteInput = (id) => {
        const newInputs = inputs.filter((input) => input.id !== id);
        setInputs(newInputs);
    };

    return (
        <div>
            <Main input={input} setInput={setInput} addInput={addInput} deleteInput ={deleteInput} inputs={inputs} />
        </div>

    )
}

export default Table;