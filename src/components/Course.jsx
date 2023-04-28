import Header from "./Header";
import Part from "./Part";

const Course = ({ courses }) => {
  return (
    <>
      {courses.map(({ name, parts, id }) => (
        <div key={id}>
          <Header key={id} name={name} />

          {parts.map(({ name, exercises, id }) => (
            <Part key={id} name={name} exercises={exercises} />
          ))}
          <p>
            Total of{" "}
            {parts.reduce((prev, current) => prev + current.exercises, 0)}{" "}
            exercises
          </p>
        </div>
      ))}
    </>
  );
};
export default Course;
