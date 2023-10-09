import { StatisticsLine } from "./StatisticsLine";

export interface Stats {
  good: number;
  neutral: number;
  bad: number;
}

type StatisticsProps = {
  statsState: Stats;
};

export const Statiscs = ({
  statsState: { good, bad, neutral },
}: StatisticsProps) => {
  const totalFeedbaks = good + bad + neutral;

  const calcAverage = () => {
    // good 1, neutral 0 positive -1
    const totalScore = good * 1 + bad * -1;
    return totalScore / totalFeedbaks;
  };

  const goodPercentage = (good / totalFeedbaks) * 100;

  const average = calcAverage();

  const hasStats = good || neutral || bad;
  return (
    <div>
      <h2>Statistics</h2>
      {hasStats ? (
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={totalFeedbaks} />
            <StatisticsLine text="average" value={average} />
            <StatisticsLine
              text="positive"
              value={goodPercentage}
              valueSign="%"
            />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};
