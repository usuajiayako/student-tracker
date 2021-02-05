import * as api from "../Api";
import React from "react";
import NavBar from "../components/NavBar";

class Students extends React.Component {
  state = {
    students: [],
    isLoading: true,
  };

  componentDidMount() {
    api.fetchStudents().then(({ students }) => {
      this.setState({ students, isLoading: false });
    });
  }
  render() {
    return this.state.isLoading ? (
      <p>Loading...</p>
      ): ( <main>
        <NavBar />
        <h2 className="header"> Current Students </h2>
        <p>Total students: {this.state.students.length}</p>
        <ul className="studentList">
          {this.state.students.map((student) => {
            return (
              <li className="studentCard" key={student._id}>
                Student Name: {student.name}
                <br />
                Current Block:
                {student.currentBlock}
                <br />
                <br />
              </li>
            );
          })}
        </ul>
      </main>
      )
  }
}

export default Students;
