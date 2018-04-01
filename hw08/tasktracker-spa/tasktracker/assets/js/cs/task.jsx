import React from 'react';
import { Card, CardBody } from 'reactstrap';

export default function Task(params) {
  let task = params.task;
  return <Card>
    <CardBody>
      <div>
        <p>Title: <b>{ task.title }</b></p>
        <p>Description: <b>{ task.description }</b></p>
        <p>Completed: <b>{ task.completed }</b></p>
        <p>Time taken: <b>{ task.time }</b></p>
        <p>Assigned to: <b>{ task.user.name }</b></p>
      </div>
    </CardBody>
  </Card>;
}
