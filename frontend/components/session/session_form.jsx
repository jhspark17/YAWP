import React from 'react';
import { Link } from 'react-router-dom';
import Zip from 'react-zipcode';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {first_name: "", last_name: "", email: "", password: "", zip_code: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }

  getFirstAndLast(){
    if (this.props.formType === "Sign Up") {
      return(
        <div>
        <input type="text" onChange={this.update("first_name")} value={this.state.first_name} placeholder="First Name" />
        <input type="text" onChange={this.update("last_name")} value={this.state.last_name} placeholder="Last Name" />
        </div>
        )
      }
      return "";
    }

  getZipCode(){
    if(this.props.formType === "Sign Up") {
    return(<input type="numeric" onChange={this.update("zip_code")} value={this.state.zip_code} placeholder="Zip Code"/>)
    } 
  }

  switch(){
    if (this.props.formType === "Sign In") {
      return (<div>New to YAWP, <Link to="/signup">Sign Up</Link></div>)
    } else {
      return (<div>Aready YAWPING, then <Link to="/signin">Sign In</Link></ div> )
    }
  }
  
  render(){
      return(
        <form onSubmit={this.handleSubmit}>
            {this.getFirstAndLast()}
            <input type="text" onChange={this.update("email")} value={this.state.email} placeholder="Email"/>
            <input type="password" onChange={this.update("password")} value={this.state.password} placeholder="Password" />
            {this.getZipCode()}
            <button type="submit">Submit</button>
            {this.switch()}
        </form>
      ) 
  }
}

export default SessionForm;