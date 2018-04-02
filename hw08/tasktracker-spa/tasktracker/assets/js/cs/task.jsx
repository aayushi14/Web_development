import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';

export default function Task(params) {

  // function edit_task(ev) {
  //   api.submit_task(props.form);
  // }

  let task = params.task;
  return <Card>
    <CardBody>
      <div>
        <p>Title: <b>{ task.title }</b></p>
        <p>Description: <b>{ task.description }</b></p>
        <p>Completed: <b>{ task.completed ? "Yes" : "No" }</b></p>
        <p>Time taken: <b>{ task.time }</b></p>
        <p>Assigned to: <b>{ task.user.name }</b></p>
      </div>
    </CardBody>
  </Card>;
}
