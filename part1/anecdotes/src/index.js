import React, { useState } from 'react' 
import { createRoot } from 'react-dom/client';  

const Title = ({text}) => {
    return (
        <h1>{text}</h1>
    )
}

const Display = ({anecdote}) => {
    return (
        <p>{anecdote}</p>
    )
}

const DisplayVotes = ({votes}) => {
    return (
        <p>has {votes} votes</p>
    )
}

const DisplayMostVoted = ({votes, anecdote}) => {
    if(votes <= 0) {
        return (<p>No voting yet!</p>)
    } else {
        return (
            <p>{anecdote}</p>
        )
    }
}

const Button = ({text, handleCLick}) => {
    return (
        <button onClick={handleCLick}>
            {text}
        </button>
    )
}

const App = (props) => {
    let [rndmNumber, setRandomAnecdote] = useState(0)
    let [voting, setVoting] = useState({
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    })
    let anecdote

    const handleBtnClick = () => {
        rndmNumber = Math.floor(Math.random() * props.anecdotes.length);
        anecdote = anecdotes[rndmNumber]
        setRandomAnecdote(rndmNumber);
    }

    const handleVoting = () => {
        const newVoting = {...voting}

        switch (rndmNumber) {
            case 0: 
            newVoting[0] += 1
            break
            case 1: 
            newVoting[1] += 1
            break
            case 2: 
            newVoting[2] += 1
            break
            case 3: 
            newVoting[3] += 1
            break
            case 4: 
            newVoting[4] += 1
            break
            case 5: 
            newVoting[5] += 1
            break
            default: break
        }
        setVoting(newVoting)
    }

    const getMostVoted = () => {
        let maxKey = null
        let maxValue = -Infinity
        let mostVoted = ''
        let mostVotedValues = {}

        for (let key in voting) {
            if(voting[key] > maxValue) {
                maxValue = voting[key]
                maxKey = key
            }
        }

        mostVoted = props.anecdotes[Number(maxKey)]
        mostVotedValues = {
            mostVoted,
            maxValue
        }
        
        return mostVotedValues
    }
    
    return ( 
        <div>
            <Title text={"Anecdote of the day"} />
            <Display anecdote = {props.anecdotes[rndmNumber]} />
            <DisplayVotes votes = {voting[rndmNumber]} />
            <Button text={"Vote"} handleCLick={handleVoting} />
            <Button text={"Genera anecdota"} handleCLick={handleBtnClick} />
            <Title text={"Anecdote with most votes"} />
            <DisplayMostVoted votes = {getMostVoted().maxValue} anecdote = {getMostVoted().mostVoted} />
        </div>
    ) 
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
 
const container = document.getElementById('root'); 
const root = createRoot(container); 
root.render(<App anecdotes = {anecdotes} />); 
