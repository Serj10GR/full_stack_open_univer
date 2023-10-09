import { Content } from "./Content";
import { Part } from "./Content/part";
import { Header } from "./header";
import { Total } from "./total";

type CourseProps = {
  course: {
    id: number;
    name: string;
    parts: Array<Part>;
  };
};

export const Course = ({ course }: CourseProps) => {
  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};
