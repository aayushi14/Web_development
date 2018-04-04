import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import api from '../api';

function Task(params) {
  let task = params.task;

  function edit_task(ev) {
    let action = {
      type: 'UPDATE_EDIT_FORM',
      data: params.task,
    };
    params.dispatch(action);
  }
  return <Card>
    <CardBody>
      <div>
        <p>Title: <b>{ task.title }</b></p>
        <p>Description: <b>{ task.description }</b></p>
        <p>Completed: <b>{ task.completed ? "Yes" : "No" }</b></p>
        <p>Time taken: <b>{ task.time }</b></p>
        <p>Assigned by: <b>{ task.user.name }</b></p>
        <p>Assigned to: <b>{ task.assignedTo }</b></p>
        <div><Link to={"/editTask"} className="btn btn-primary" onClick={ edit_task }>Edit</Link></div>
      </div>
    </CardBody>
  </Card>;
}

function state2props(state) {
  console.log("rerender@Task", state);
  return {
    form: state.form,
    users: state.users,
 };
}

// Export the result of a curried function call.
export default connect(state2props)(Task);
