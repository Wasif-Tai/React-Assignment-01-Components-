import { useState } from "react";
import "./App.css";
import StudentCard from "./StudentCard";
import studentOne from "./assets/student 01.png";
import studentTwo from "./assets/student 02.png";
import studentThree from "./assets/student 03.png";
import studentFour from "./assets/student 04.png";

function App() {
  // useState is a hook
  // Hook is a function that can be used in functional component
  // useState return array, in the 0 index there is value and in index 1 there is function to update that value
  // when value is state updated, react rerenders the HTML and updated value is shown in the UI.
  let [value, setValue] = useState();
  console.log("value", value);
  console.log("setValue", setValue);

  const students = [
    {
      name: "Sara Khan",
      className: "8-A",
      grade: "A+",
      color: "blue",
      image: studentOne,
    },
    {
      name: "Ali Ahmed",
      className: "8-B",
      grade: "A",
      color: "green",
      image: studentTwo,
    },
    {
      name: "Mia Anderson",
      className: "7-A",
      grade: "B+",
      color: "purple",
      image: studentThree,
    },
    {
      name: "Leo Thompson",
      className: "7-B",
      grade: "A-",
      color: "orange",
      image: studentFour,
    },
  ];

  return (
    <main className="app-shell">
      <header className="page-header">
        <div>
          <h1>Our students</h1>
          <p className="intro">Meet the bright minds in this year's class.</p>
        </div>
        <div className="student-count">{students.length} students</div>
      </header>

      <section className="student-grid" aria-label="Student profiles">
        {students.map((student) => (
          <StudentCard key={student.name} student={student} />
        ))}
      </section>
    </main>
  );
}

export default App;
