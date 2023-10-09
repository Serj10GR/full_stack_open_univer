type StatisticLineProps = {
  text: string;
  value: number;
  valueSign?: string;
};

export const StatisticsLine = ({
  text,
  value,
  valueSign,
}: StatisticLineProps) => {
  return (
    <p>
      {text}: {value}
      {valueSign ? valueSign : null}
    </p>
  );
};
