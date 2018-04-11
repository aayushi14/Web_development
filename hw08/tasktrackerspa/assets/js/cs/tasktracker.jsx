import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Nav from './nav';
import Feed from './feed';
import Users from './users';
import TaskForm from './task-form';
import UserForm from './user-form';
import EditForm from './edit-form';

export default function tasktracker_init(store) {
  ReactDOM.render(
    <Provider store={store}>
      <Tasktracker />
    </Provider>,
    document.getElementById('root'),
  );
}

let Tasktracker = connect((state) => state)((props) => {
  if(props.token) {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" exact={true} render={() =>
            <div>
              <Feed tasks={props.tasks} />
            </div>
          } />
          <Route path="/newTask" exact={true} render={() =>
            <TaskForm users={props.users} root={this} />
          } />
          <Route path="/editTask" exact={true} render={() =>
            <EditForm users={props.users} root={this} />
          } />
          <Route path="/users" exact={true} render={() =>
            <Users users={props.users} />
          } />
          <Route path="/users/:user_id" render={({match}) =>
            <Feed tasks={_.filter(props.tasks, (tt) =>
              match.params.user_id == tt.user.id )
            } />
          } />
        </div>
      </Router>
    );
  }
  else {
    return (
      <Router>
        <div>
          <Nav />
          <br />
          <div className="text-center">
            <h3> Welcome to Task Tracker </h3>
            <p className="text-primary"> Already a user? Enter you email and password and click Log In </p>
            <p className="text-primary"> New user? Click on New User to register and then Login</p>
          </div>
          <Route path="/newUser" exact={true} render={() =>
            <UserForm users={props.users} root={this} />
          } />
        </div>
      </Router>
    );
  }
});
