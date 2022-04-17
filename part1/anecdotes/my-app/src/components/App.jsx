import React, { useState } from "react";
import Button from "./Button";

const App = () => {
    const anecdotes = [
        // anecdote 0
        "If it hurts, do it more often",
        // anecdote 1
        "Adding manpower to a late software project makes it later!",
        // anecdote 2
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        // anecdote 3
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        // anecdote 4
        "Premature optimization is the root of all evil.",
        // anecdote 5
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        // anecdote 6
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
    ];

    const [selected, setSelected] = useState(0);
    
    // Initializes an object with 0 votes per anecdote
    const [votes, setVotes] = useState({
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    });

    // Sets to state to random number
    const getAnecdote = () => setSelected(getRandomInt())

    // Generates a random integer from 0 to 6 (inclusive)
    const getRandomInt = () => 
        Math.floor(Math.random() * 7);

    // Initializes new object to track updated votes to prevent mutating original state
    const addVote = (anecdotesIndex) => {
        const newVotes = { ...votes}
        // Converts selected array index to a string
        const indexNumber = anecdotesIndex.toString();
        // Updates vote counter that corresponds to selected anecdote
        newVotes[indexNumber] += 1;
        // Updates state with newVotes array
        setVotes(newVotes);
    }

    return <>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <Button action={() => addVote(selected)} buttonText="vote"/>
        <Button action={getAnecdote} buttonText="next anecdote"/>
    </>;
};

export default App;
