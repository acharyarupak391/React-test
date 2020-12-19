import React from 'react';
import { render } from 'react-dom';
import Form from "./components/Form";
import "./components/Form.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import {RESET_LABEL, EMPTY_VALUE_LABEL, INVALID_EMAIL_LABEL, PASSWORD_LENGTH_LABEL, REQUEST_SUCCESS_LABEL, REQUEST_ERROR_LABEL, SAVE_EMAIL_INPUT, SAVE_PASSWORD_INPUT, SAVE_EMAIL_FIELD } from "./components/formActions";

// class App extends React.Component {
//   render() {
//     var obj = {"l1": "Email", "l2": "Password"};
//     return (
//       <div className = "form-div">
//         <Form data={obj}/>
//       </div>
//     )
//   }
// }

const initialState = {
  email: "",
  password: "",
  validationWarning: "",
  warningLabelClass: "",
  inputField: undefined
}

function formReducer(state, action) {
  // console.log('state: ', state, 'action: ', action)
  switch(action.type) {
    case RESET_LABEL:
      return {
        email: state.email,
        password: state.password,
        validationWarning: "", 
        warningLabelClass: "",
        inputField: state.inputField
      }
    
    case EMPTY_VALUE_LABEL:
      return {
        email: state.email,
        password: state.password,
        validationWarning: "Empty values not accepted",
        warningLabelClass: "warningOn",
        inputField: state.inputField
      }
    
    case INVALID_EMAIL_LABEL:
      return {
        email: state.email,
        password: state.password,
        validationWarning: "Invalid email format!",
        warningLabelClass: "warningOn",
        inputField: state.inputField
      }
    
    case PASSWORD_LENGTH_LABEL:
      return {
        email: state.email,
        password: state.password,
        validationWarning: "Passwords must be atleast 6 characters and atmost 20 characters",
        warningLabelClass: "warningOn",
        inputField: state.inputField
      }
    
    case REQUEST_SUCCESS_LABEL:
      return {
        email: state.email,
        password: state.password,
        validationWarning: "Welcome, " + action.payload.user.first_name + " " + action.payload.user.last_name + " | ID: " + action.payload.user.ID,
        warningLabelClass: "warningOn success",
        inputField: state.inputField
      }
    
    case REQUEST_ERROR_LABEL:
      return {
        email: state.email,
        password: state.password,
        validationWarning: "Error " + action.payload.response.status + ": " + action.payload.response.data.error,
        warningLabelClass: "warningOn",
        inputField: state.inputField
      }

    case SAVE_EMAIL_INPUT:
      return {
        email: action.payload.target.value,
        password: state.password,
        validationWarning: state.validationWarning,
        warningLabelClass: state.warningLabelClass,
        inputField: state.inputField
      }
    
    case SAVE_PASSWORD_INPUT:
      return {
        email: state.email,
        password: action.payload.target.value,
        validationWarning: state.validationWarning,
        warningLabelClass: state.warningLabelClass,
        inputField: state.inputField
      }
    
    case SAVE_EMAIL_FIELD:
      return {
        email: state.email,
        password: state.password,
        validationWarning: state.validationWarning,
        warningLabelClass: state.warningLabelClass,
        inputField: action.payload.event.target
      }

    default:
      return state;
      
  }
}

const store = createStore(formReducer, initialState);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className = "form-div">
          <Form/>
        </div>
      </Provider>
    )
  }
}

render(<App/>, window.document.getElementsByTagName("body")[0])