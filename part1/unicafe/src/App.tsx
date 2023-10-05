import { useState } from "react";
import { Button } from "./components/Button";

interface Stats {
  good: number;
  neutral: number;
  bad: number;
}

type Feedback = keyof Stats;

const App = () => {
  const [stats, setStats] = useState<Stats>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // take all possible stats from the object
  const feedbacks = Object.keys(stats);

  const handleClick = (val: Feedback) => {
    setStats((prevStats) => ({
      ...prevStats,
      [val]: prevStats[val] + 1,
    }));
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <div>
        {feedbacks.map((feedback) => (
          <Button
            onClick={() => handleClick(feedback as Feedback)}
            key={feedback}
            text={feedback}
          />
        ))}
      </div>
      <h2>Statistics</h2>
      <p>good: {stats.good}</p>
      <p>neutral: {stats.neutral}</p>
      <p>bad: {stats.bad}</p>
    </div>
  );
};

export default App;
