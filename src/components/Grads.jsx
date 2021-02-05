import React from "react";
import * as api from "../Api";

import NavBar from "./NavBar";

class Grads extends React.Component {
  state = {
    students: [],
    isLoading: true,
  };
  componentDidMount() {
    api.fetchGraduates().then(({ students }) => {
      this.setState({ students, isLoading: false });
    });
  }
  render() {
    return this.state.isLoading ? (
      <p>Loading...</p>
      ): ( <main>
        <NavBar />
        <h2 class="guraduates"> Graduates </h2>
        <p>Total graduates: {this.state.students.length}</p>
        <ul className="studentList">
          {this.state.students.map((student) => {
            return (
              <li key={student._id}>
                <p>Graduate Name: {student.name}</p>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default Grads;
