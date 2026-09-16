import "./App.css";
import StudentCard from "./StudentCard";
import studentOne from "./assets/student 01.png";
import studentTwo from "./assets/student 02.png";
import studentThree from "./assets/student 03.png";
import studentFour from "./assets/student 04.png";

function App() {
  const students = [
    { name: "Ava Morgan", className: "8-A", grade: "A+", color: "blue", image: studentOne },
    { name: "Noah Williams", className: "8-B", grade: "A", color: "green", image: studentTwo },
    { name: "Mia Anderson", className: "7-A", grade: "B+", color: "purple", image: studentThree },
    { name: "Leo Thompson", className: "7-B", grade: "A-", color: "orange", image: studentFour },
  ];

  return (
    <main className="app-shell">
      <header className="page-header">
        <div>
          <h1>Our students</h1>
          <p className="intro">Meet the bright minds in this year&apos;s class.</p>
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
