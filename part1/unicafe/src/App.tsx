import { useState } from "react";
import { Button } from "./components/Button";
import { Statiscs, Stats } from "./components/Statistics";

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
      <Statiscs statsState={stats} />
    </div>
  );
};

export default App;
