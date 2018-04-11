import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import api from '../api';

function EditForm(params) {
  function update(ev) {
    let tgt = $(ev.target);
    let data = {};

    if (tgt.attr('name') == "completed") {
      data["completed"] = $(tgt).is(':checked') ? 'true' : 'false';
    }
    else {
      data[tgt.attr('name')] = tgt.val();
    }

    let action = {
      type: 'UPDATE_EDIT_FORM',
      data: data,
    };
    params.dispatch(action);
  }

  function edit(ev) {
    var task_id = params.form.id;
    api.edit_task(params.form, task_id);
  }

  let users = _.map(params.users, (uu) => <option key={uu.id} value={uu.name}>{uu.name}</option>);
  return <div style={{padding: "4ex"}}>
    <h2>Edit Task</h2>
    <FormGroup>
      <Label for="title">Title</Label>
      <Input name="title" value={params.form.title} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="description">Description</Label>
      <Input type="textarea" name="description" value={params.form.description} onChange={update} />
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input type="checkbox" name="completed" value={params.form.completed} onChange={update} />{' '}
        Completed
      </Label>
    </FormGroup>
    <FormGroup>
      <Label for="time">Time taken</Label>
      <Input type="number" min="0" step="15" name="time" value={params.form.time || 0} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="user_id">Assigned by: </Label>
      <Input name="user_id" value={params.form.user_id} onChange={update} disabled />
    </FormGroup>
    <FormGroup>
      <Label for="assignedTo">Assign task to: </Label>
      <Input type="select" name="assignedTo" value={params.form.assignedTo} onChange={update}>
        { users }
      </Input>
    </FormGroup>
    <Link onClick={edit} className="btn btn-success" to={"/"}>Update Task</Link> &nbsp;
    <Link className="btn btn-danger" to={"/"}>Cancel</Link>
  </div>;
}

function state2params(state) {
  return {
    form: state.editform,
    users: state.users,
 };
}

// Export the result of a curried function call.
export default connect(state2params)(EditForm);
