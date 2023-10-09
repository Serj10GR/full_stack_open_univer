import { Course } from "./components/Course";

const App = () => {
  const courses = [
    {
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
    },
    {
      id: 2,
      name: "Node.js Course",
      parts: [
        {
          name: "Node.js global",
          exercises: 10,
          id: 1,
        },
        {
          name: "Node js Lesson 2",
          exercises: 7,
          id: 2,
        },
        {
          name: "Node js Lesson 3",
          exercises: 1,
          id: 3,
        },
        {
          name: "Node js Lesson 4",
          exercises: 15,
          id: 4,
        },
        {
          name: "Node js Lesson 5",
          exercises: 10,
          id: 5,
        },
        {
          name: "Node js Lesson 6",
          exercises: 3,
          id: 6,
        },
      ],
    },
  ];

  return (
    <div>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;
