import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

function tasks(state = [], action) {
  switch (action.type) {
  case 'TASKS_LIST':
    return [...action.tasks];
  case 'ADD_TASK':
    return [action.task, ...state];
  default:
    return state;
  }
}

function users(state = [], action) {
  switch (action.type) {
  case 'USERS_LIST':
    return [...action.users];
  case 'ADD_USER':
    return [action.user, ...state];
  default:
    return state;
  }
}

let empty_form = {
  title: "",
  description: "",
  completed: false,
  time: 0,
  user_id: "",
  assignedTo: "",
  token: "",
};

function form(state = empty_form, action) {
  switch (action.type) {
    case 'UPDATE_FORM':
      return Object.assign({}, state, action.data);
    case 'SET_TOKEN':
      return Object.assign({}, state, action.token);
    default:
      return state;
  }
}

function editform(state = empty_form, action) {
  switch (action.type) {
    case 'UPDATE_EDIT_FORM':
      return Object.assign({}, state, action.data);
    case 'SET_TOKEN':
      return Object.assign({}, state, action.token);
    default:
      return state;
  }
}

function token(state = null, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.token;
    case 'RESET_TOKEN':
      return state;
    default:
      return state;
  }
}

let empty_user= {
  name: "",
  email: "",
  pass: "",
};

function userform(state = empty_user, action) {
  switch (action.type) {
    case 'UPDATE_USER_FORM':
      return Object.assign({}, state, action.data);
    case 'CLEAR_USER_FORM':
      return empty_user;
    default:
      return state;
  }
}

let empty_login = {
  email: "",
  pass: "",
};

function login(state = empty_login, action) {
  switch (action.type) {
    case 'UPDATE_LOGIN_FORM':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

function root_reducer(state0, action) {
  console.log("reducer", action);
  let reducer = combineReducers({tasks, users, form, token, login, userform, editform});
  let state1 = reducer(state0, action);
  console.log("state1", state1);
  return deepFreeze(state1);
};

let store = createStore(root_reducer);
export default store;
