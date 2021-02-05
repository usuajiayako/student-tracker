import React from "react";
import * as api from "../Api";
import NavBar from "./NavBar";

class Addstudent extends React.Component {
  state = {
    name: "",
    startingCohort: "",
    msg: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    api.addStudent({ ...this.state }).then((data) => {
      data.status === 400
        ? this.setState({
            name: "",
            startingCohort: "",
            msg: "Unable to add new student",
          })
        : this.setState({
            name: "",
            startingCohort: "",
            msg: "Student successfully added!",
          });
    });
  };

  handleInput = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  };

  render() {
    return (
      <>
        <NavBar />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              onChange={this.handleInput}
              id="name"
              value={this.state.name}
            />
          </label>
          <label>
            Starting Cohort:
            <input
              type="number"
              onChange={this.handleInput}
              id="startingCohort"
              value={this.state.startingCohort}
            />
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            Add a new student
          </button>
        </form>
        <p>{this.state.msg}</p>
      </>
    );
  }
}

export default Addstudent;
