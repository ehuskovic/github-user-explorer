import React, { useState } from 'react';
import Test from '../components/Test'; 
import '../assets/style/Input.css';

const Input = () => {
    const [query, setQuery] = useState("");
    const [direction, setDirection] = useState("ASC")

    const sortNames = () => setDirection(prev => prev === "ASC" ?  "DESC" : "ASC");
    

    return (
        <div className="input-container">
        <input 
            placeholder="Search for a user..."
            type="text"
            onChange={(e) => setQuery(e.target.value)} />
        {query?.length?
         <Test 
         query = {query}
         direction = {direction}
         sortNames = {sortNames} />
         : <p></p>
        }
        </div>
    )
}

export default Input; 