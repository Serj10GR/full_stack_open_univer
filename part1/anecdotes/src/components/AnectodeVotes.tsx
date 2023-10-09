type AnectodeVotes = {
  votes: number;
};

export const AnectodeVotes = ({ votes }: AnectodeVotes) => {
  return <div>has {votes} votes</div>;
};
