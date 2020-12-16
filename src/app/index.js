import React from 'react';
import { render } from 'react-dom';

import { Form } from "./components/Form";
import "./components/Form.css";

class App extends React.Component {
  render() {
    var obj = {"l1": "Email", "l2": "Password"};
    return (
      <div className = "form-div">
        <Form data={obj}/>
      </div>
    )
  }
}

render(<App/>, window.document.getElementsByTagName("body")[0])