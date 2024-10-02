import React, { useState } from 'react';

function Todo() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function handlechange(event) {
        const newValue = event.target.value;
        setInput(newValue);
    }

    function addItem() {
        setItems((prevValue) => {
            return [...prevValue, input];
        });
        setInput("");  
    }

    return (
        <>
            <div>
                <h2>Todo</h2>
            </div>
            <div>
                <input type="text" value={input} onChange={handlechange} />
                <button onClick={addItem}>
                    <span>ADD</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map((todo, index) => {
                        return <li key={index}>{todo}</li>;
                    })}
                </ul>
            </div>
        </>
    );
}

export default Todo;
