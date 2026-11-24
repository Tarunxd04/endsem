function Student({ name, marks }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{marks}</td>
      <td>{marks >= 35 ? "Pass" : "Fail"}</td>
    </tr>
  );
}

export default Student;