import { Course } from "./components/Course";

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "State of a componente 2",
        exercises: 10,
        id: 4,
      },
      {
        name: "State of a component 3",
        exercises: 14,
        id: 5,
      },
      {
        name: "State of a component 4",
        exercises: 8,
        id: 6,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
