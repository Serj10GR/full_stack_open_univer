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
    return totalFeedbaks > 0 ? totalScore / totalFeedbaks : 0;
  };

  const goodPercentage = totalFeedbaks > 0 ? (good / totalFeedbaks) * 100 : 0;

  const average = calcAverage();
  return (
    <div>
      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {totalFeedbaks}</p>
      <p>average: {average}</p>
      <p>positive: {goodPercentage}%</p>
    </div>
  );
};
