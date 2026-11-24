import Student from "./Student";
import "./App.css";

function App() {
  const students = [
    { id: 1, name: "Tarun", marks: 90 },
    { id: 2, name: "Rahul", marks: 25 },
    { id: 3, name: "Arjun", marks: 75 },
    { id: 4, name: "Kiran", marks: 30 },
    { id: 5, name: "Sai", marks: 85 }
  ];

  return (
    <div>
      <h1>Student Management System</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Marks</th>
            <th>Result</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <Student
              key={s.id}
              name={s.name}
              marks={s.marks}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;