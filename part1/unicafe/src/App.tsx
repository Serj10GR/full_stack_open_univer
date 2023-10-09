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

  const totalFeedbaks = stats.good + stats.bad + stats.neutral;

  // take all possible stats from the object
  const feedbacks = Object.keys(stats);

  const handleClick = (val: Feedback) => {
    setStats((prevStats) => ({
      ...prevStats,
      [val]: prevStats[val] + 1,
    }));
  };

  const calcAverage = () => {
    // good 1, neutral 0 positive -1
    const totalScore = stats.good * 1 + stats.bad * -1;
    return totalScore / totalFeedbaks;
  };

  const goodPercentage = (stats.good / totalFeedbaks) * 100;

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
      <p>all: {totalFeedbaks}</p>
      <p>average: {calcAverage()}</p>
      <p>positive: {goodPercentage}%</p>
    </div>
  );
};

export default App;
