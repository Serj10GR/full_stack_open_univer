import { Content } from "./components/content";
import { Header } from "./components/header";
import { Total } from "./components/total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header title={course} />
      <Content
        parts={[
          {
            name: part1,
            nr: exercises1,
          },
          {
            name: part2,
            nr: exercises2,
          },
          {
            name: part3,
            nr: exercises3,
          },
        ]}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
