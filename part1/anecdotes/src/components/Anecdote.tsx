import { AnectodeVotes } from "./AnectodeVotes";

type AnectodeProps = {
  text: string;
  votes: number;
};

export const Anectode = ({ text, votes }: AnectodeProps) => {
  return (
    <>
      <p>{text}</p>
      <AnectodeVotes votes={votes} />
    </>
  );
};
