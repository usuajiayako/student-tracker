import React from "react";
import * as api from "../Api";

class Addstudent extends React.Component {
  state = { 
      "name": "",
      "startingCohort": "",
   }

  handleSubmit = (event) => {
    event.preventDefault();
    api.addStudent({...this.state})
    this.setState({ "name": "",
    "startingCohort": "",})
  }

  handleInput = ({target: {value, id}}) => {
    this.setState((currentState) => {
      return { [id]: value };
    }, () => {console.log(this.state)});
  };

  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:
        <input type="text" onChange={this.handleInput} id="name" value={this.state.name}/>
        </label>
        <label>Starting Cohort:
        <input type="text" onChange={this.handleInput} id="startingCohort" value={this.state.startingCohort}/>
        </label>
        <button type="submit" onClick={this.handleSubmit}>Add a new student</button>
      </form>
      );
  }
}
 
export default Addstudent;