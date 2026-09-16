function StudentCard({ student }) {
  return (
    <article className={`student-card ${student.color}`}>
      <div className="card-top">
        <span className="class-label">Class {student.className}</span>
        <span className="grade-badge">{student.grade}</span>
      </div>
      <img
        className="student-picture"
        src={student.image}
        alt={`${student.name} profile`}
      />
      <div className="student-info">
        <p className="detail-label">Student Name</p>
        <h2>{student.name}</h2>
        <div className="card-footer">
          <span>Class</span>
          <strong>{student.className}</strong>
        </div>
      </div>
    </article>
  );
}

export default StudentCard;
