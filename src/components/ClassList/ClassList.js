import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then(response => {
        this.setState({
          students: response.data
        });
      });
    console.log(this.state.students.data);
  }

  render() {
    return (
      <div className="box">
        <h1 />
        <h2>{this.props.match.params.class}</h2>
        {this.state.students.map(student => {
          return (
            <div key={student.id}>
              <Link />
              <h3>
                {student.first_name} {student.last_name}
              </h3>
            </div>
          );
        })}
      </div>
    );
  }
}
