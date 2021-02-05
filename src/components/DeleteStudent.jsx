import React from "react";
import * as api from "../Api";
import NavBar from "./NavBar";

class DeleteStudent extends React.Component {
  state = { id: "", msg: "" };

  handleInput = (event) => {
    this.setState({ id: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    api.deleteStudent({ ...this.state }).then((res) => {
      res.status === 204
        ? this.setState({ id: "", msg: "Great job" })
        : this.setState({ id: "", msg: "Student Id does not exist" });
    });
  };

  render() {
    return (
      <>
        <NavBar />
        <form onSubmit={this.handleSubmit} className="form">
          <label>
            Id of student you wish to delete:
            <input
              type="text"
              onChange={this.handleInput}
              id="id"
              value={this.state.id}
            />
          </label>
          <button type="submit" onClick={this.handleSubmit}>
            Delete student
          </button>
        </form>
        <p> {this.state.msg}</p>
      </>
    );
  }
}

export default DeleteStudent;
