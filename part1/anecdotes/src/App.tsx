import { useState } from "react";
import { Button } from "./components/Button";
import { Anectode } from "./components/Anecdote";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const handleClick = () => {
    // generate random anectode from the array
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVoteClick = () => {
    const newPoints = [...points];
    newPoints[selected] = newPoints[selected] + 1;
    setPoints(newPoints);
  };

  const mostPoints = Math.max(...points);

  return (
    <div>
      <h2>Anectode of the day</h2>
      <Anectode text={anecdotes[selected]} votes={points[selected]} />
      <Button onClick={handleVoteClick} type="button" text="Vote" />
      <Button onClick={handleClick} type="button" text="next anectode" />

      <h2>Anectode with most votes</h2>
      <Anectode
        text={anecdotes[points.indexOf(mostPoints)]}
        votes={mostPoints}
      />
    </div>
  );
};

export default App;
