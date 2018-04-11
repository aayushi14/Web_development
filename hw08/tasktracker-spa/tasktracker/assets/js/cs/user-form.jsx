import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function UserForm(params) {

  function update(ev) {
    let tgt = $(ev.target);
    let data = {};
    data[tgt.attr('name')] = tgt.val();

    let action = {
      type: 'UPDATE_USER_FORM',
      data: data,
    };
    params.dispatch(action);
  }

  function submit(ev) {
    var new_user = {name: params.form.name, email: params.form.email, password: params.form.pass}
    api.submit_user(new_user);
    location.reload(true);
  }

  function clear(ev) {
    params.dispatch({
      type: 'CLEAR_USER_FORM',
    });
  }

  return <div style={{padding: "4ex"}}>
    <h3>New User</h3>
    <FormGroup>
      <Label for="name">Name</Label>
      <Input name="name" value={params.form.name} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="email">Email</Label>
      <Input type="email" name="email" value={params.form.email} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="pass">Password</Label>
        <Input type="password" name="pass" value={params.form.pass} onChange={update} />
    </FormGroup>
    <Button onClick={submit} color="success">Register</Button> &nbsp; &nbsp;
    <Button onClick={clear} color="danger">Clear</Button>
  </div>;
}

function state2params(state) {
  console.log("rerender@UserForm", state);
  return {
    form: state.userform,
    users: state.users,
 };
}

// Export the result of a curried function call.
export default connect(state2params)(UserForm);
