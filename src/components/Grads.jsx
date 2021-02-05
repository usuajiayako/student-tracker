import React from "react";
import * as api from "../Api";

import NavBar from "./NavBar";

class Grads extends React.Component {
  state = {
    students: [],
  };
  componentDidMount() {
    api.fetchGraduates().then(({ students }) => {
      this.setState({ students });
    });
  }
  render() {
    return (
      <main>
        <NavBar />

        <h2 class="guraduates"> Graduates </h2>
        <p>Total graduates: {this.state.students.length}</p>
        <ul className="studentList">
          {this.state.students.map((student) => {
            return (
              <li key={student._id}>
                Graduate Name: {student.name}
                <br />
                <br />
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default Grads;
