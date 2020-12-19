import React from 'react';
import "./Form.css";
import axios from "axios";

import { connect } from "react-redux";
import { reset_label, empty_value_label, invalid_email_label, password_length_label, request_success_label, request_error_label, save_email_input, save_password_input, save_email_field } from "./formActions"

// export class Form extends React.Component {
class Form extends React.Component {
  constructor(props) {
    super();

    console.log('props: ', props);
    
    // this.state = {
    //   email: "",
    //   password: "",
    //   validationWarning: "",
    //   warningLabelClass: "",
    //   inputField: undefined
    // }


  }

  componentDidMount() {
    // console.log('did mount')
  }

  componentDidUpdate() {
    // console.log('did update')
  }

  componentWillUnmount() {
    // console.log('will unmount')
  }

  componentWillReceiveProps(nextProps) {
    // console.log('will receive props: ', nextProps)
  }

  onSubmit(e) {
    e.preventDefault();
    // console.log(this.state.inputField.checkValidity())
    // this.setState({validationWarning: "", warningLabelClass: ""})

    let email = this.props.email;
    let password = this.props.password;

    // Empty values validation
    if(email.match(/^\s*$/) || password.match(/^\s*$/)) {
      // return this.setState({
      //   validationWarning: "Empty values not accepted",
      //   warningLabelClass: "warningOn"
      // })
      this.props.empty_value_label();
      return;
    }

    if(this.props.inputField && this.props.inputField.checkValidity() == false) {
      // return this.setState({
      //   validationWarning: "Invalid email format!",
      //   warningLabelClass: "warningOn"
      // })
      this.props.invalid_email_label();
      return;
    }

    // Password length validation
    if(password.length < 6 || password.length > 20) {
      // return this.setState({
      //   validationWarning: "Passwords must be atleast 6 characters and atmost 20 characters",
      //   warningLabelClass: "warningOn"
      // })
      this.props.password_length_label();
      return;
    }



    axios.post("https://api.test.01cloud.dev/user/login", 
      {
        email,
        password
      }
    )
      .then(res => {
        if(res.status == 200) {
          let user = res.data.user;
          // this.setState({
          //   validationWarning: "Welcome, " + user.first_name + " " + user.last_name + " | ID: " + user.ID,
          //   warningLabelClass: "warningOn success"
          // })
          this.props.request_success_label(user);
        }
      })
      .catch(err => {
        // this.setState({
        //   validationWarning: "Error " + err.response.status + ": " + err.response.data.error,
        //   warningLabelClass: "warningOn"
        // })
        this.props.request_error_label(err.response);
      })
  }

  onFocusChange(e) {
    // e.target.type == "email" ? this.setState({email: e.target.value}) : this.setState({password: e.target.value});
    // this.setState({validationWarning: "", warningLabelClass: ""})
    // e.target.type == "email" ? this.setState({inputField: e.target}) : null;

    e.target.type == "email" ? this.props.save_email_input(e.target) : this.props.save_password_input(e.target);
    this.props.reset_label();
    (!this.props.inputField && e.target.type == "email") ? this.props.save_email_field(e) : null;
  }

  render() {
    return(
      <form name="my-form">
        <span className={this.props.warningLabelClass}>{this.props.validationWarning}</span><br/>
        <label id="email-label" onClick={e => this.onLabelClick(e)}>Email:</label><br/>
        <input type="email" onChange={e => this.onFocusChange(e)}/><br/><br/>
        <label id="pass-label" onClick={e => this.onLabelClick(e)}>Password:</label><br/>
        <input type="password" onChange={e => this.onFocusChange(e)}/><br/><br/>
        <button onClick={e => this.onSubmit(e)}>LogIn</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    email: state.email,
    password: state.password,
    validationWarning: state.validationWarning,
    warningLabelClass: state.warningLabelClass,
    inputField: state.inputField
  }
}

const mapDispatchToProps = {
  reset_label, empty_value_label, invalid_email_label, password_length_label, request_success_label, request_error_label, save_email_input, save_password_input, save_email_field
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);