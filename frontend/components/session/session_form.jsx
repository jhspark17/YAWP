import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Zip from 'react-zipcode';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: "",};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  errorHandling(){
    if(this.props.errors.length > 0) {
      return(this.props.errors[0]);
    };
    return "";
  }


  update(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state)
    .then(() => this.props.history.push('/'));
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

  demoUser(e){
      e.preventDefault()
      this.props.action({ email: "jpark@mail.com", password: "123456"})
    
  }
  
  render(){
    if (this.props.currentUser) {
      <Redirect to="/" />
    }
      return(
        <form className="center-form"  onSubmit={this.handleSubmit}>
          <div>
          {this.props.formType === "Sign In" ? <h2>Sign In to start YAWPING</h2> : <h2>Join the YAWPING community</h2>}
          </div>
          <div>
            {this.getFirstAndLast()}
          </div>
            <div>
            <input type="text" onChange={this.update("email")} value={this.state.email} placeholder="Email"/>
            <input type="password" onChange={this.update("password")} value={this.state.password} placeholder="Password" />
          </div>
            {this.getZipCode()}
            <button type="submit">Submit</button>
            {this.switch()}
            {this.errorHandling()}
        </form>
      ) 
  }
}

export default SessionForm;