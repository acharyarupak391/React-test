import React from 'react';
import "./Form.css";
import axios from "axios";

export class Form extends React.Component {
  constructor(props) {
    super();
    // console.log(props)
    
    this.state = {
      email: "",
      password: ""
    }
  }

  onLabelClick(e) {
    console.log(e.target.id)
  }

  onSubmit(e) {
    e.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    if(email.match(/^\s*$/) || password.match(/^\s*$/)) return;

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
    e.target.type == "email" ? this.setState({email: e.target.value}) : this.setState({password: e.target.value})
  }

  render() {
    // console.log(props)
    return(
      <form name="my-form">
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