import React from 'react';
import "./Form.css";
import axios from "axios";

export class Form extends React.Component {
  constructor(props) {
    super();
    // console.log(props)
    
    this.state = {
      email: "",
      password: "",
      validationWarning: "",
      warningLabelClass: "",
      inputField: undefined
    }
  }

  onLabelClick(e) {
    console.log(e.target.id)
  }

  onSubmit(e) {
    e.preventDefault();
    // console.log(this.state.inputField.checkValidity())
    let email = this.state.email;
    let password = this.state.password;

    // Empty values validation
    if(email.match(/^\s*$/) || password.match(/^\s*$/)) {
      return this.setState({
        validationWarning: "Empty values not accepted",
        warningLabelClass: "warningOn"
      })
    }

    if(this.state.inputField.checkValidity() == false) {
      return this.setState({
        validationWarning: "Incorrect email format!",
        warningLabelClass: "warningOn"
      })
    }

    // Password length validation
    if(6 > password.length > 20) {
      return this.setState({
        validationWarning: "Passwords must be atleast 6 characters and atmost 20 characters",
        warningLabelClass: "warningOn"
      })
    }



    axios.post("https://api.test.01cloud.dev/user/login", 
      {
        email,
        password
      }
    )
      .then(res => console.log('res: ',  res))
      .catch(err => console.log('err: ', err))
  }

  onFocusChange(e) {
    e.target.type == "email" ? this.setState({email: e.target.value}) : this.setState({password: e.target.value});
    this.setState({validationWarning: "", warningLabelClass: ""})
    e.target.type == "email" ? this.setState({inputField: e.target}) : null;
  }

  render() {
    // console.log(props)
    return(
      <form name="my-form">
        <span className={this.state.warningLabelClass}>{this.state.validationWarning}</span><br/>
        <label 
          id="email-label" 
          onClick={e => this.onLabelClick(e)}
        >Email:</label><br/>
        <input type="email" onChange={e => this.onFocusChange(e)}/><br/><br/>
        <label id="pass-label" onClick={e => this.onLabelClick(e)}>Password:</label><br/>
        <input type="password" onChange={e => this.onFocusChange(e)}/><br/><br/>
        <button onClick={e => this.onSubmit(e)}>LogIn</button>
      </form>
    )
  }
}