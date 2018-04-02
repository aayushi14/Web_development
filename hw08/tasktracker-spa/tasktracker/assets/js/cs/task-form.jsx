import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function TaskForm(props) {
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
      type: 'UPDATE_FORM',
      data: data,
    };
    props.dispatch(action);
  }

  function submit(ev) {
    api.submit_task(props.form);
  }

  function clear(ev) {
    props.dispatch({
      type: 'CLEAR_FORM',
    });
  }

  let users = _.map(props.users, (uu) => <option key={uu.id} value={uu.id}>{uu.name}</option>);
  return <div style={{padding: "4ex"}}>
    <h2>New Task</h2>
    <FormGroup>
      <Label for="title">Title</Label>
      <Input name="title" value={props.form.title} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="description">Description</Label>
      <Input type="textarea" name="description" value={props.form.description} onChange={update} />
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input type="checkbox" name="completed" value={props.form.completed} onChange={update} />{' '}
        Completed
      </Label>
    </FormGroup>
    <FormGroup>
      <Label for="time">Time taken</Label>
      <Input type="number" min="0" step="15" name="time" value={props.form.time || 0} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="user_id">Assign task to: </Label>
      <Input type="select" name="user_id" value={props.form.user_id} onChange={update}>
        { users }
      </Input>
    </FormGroup>
    <Button onClick={submit} color="success">Create Task</Button> &nbsp; &nbsp; &nbsp;
    <Button onClick={clear} color="danger">Clear</Button>
  </div>;
}

function state2props(state) {
  console.log("rerender@TaskForm", state);
  return {
    form: state.form,
    users: state.users,
 };
}

// Export the result of a curried function call.
export default connect(state2props)(TaskForm);
