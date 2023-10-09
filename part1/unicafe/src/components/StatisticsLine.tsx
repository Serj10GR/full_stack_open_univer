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
    <tr>
      <td>{text}:</td>
      <td>
        {value}
        {valueSign ? valueSign : null}
      </td>
    </tr>
  );
};
