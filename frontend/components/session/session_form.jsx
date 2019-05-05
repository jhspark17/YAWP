import React from "react";
import { Link, Redirect } from "react-router-dom";


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this;
  }

  errorHandling() {
    if (this.props.errors.length > 0) {
      return (
        <div id="show-error-container">
          <div id="text-error">{this.props.errors[0]}</div>
          <div>
            <button
              type="button"
              class="close"
              aria-label="Close"
              onClick={this.props.clearErrors}
              className="x-button"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      );
    }
    return "";
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push("/"));
  }

  getFirstAndLast() {
    if (this.props.formType === "Sign Up") {
      return (
        <div className="first-and-last-container">
          <input
            type="text"
            onChange={this.update("first_name")}
            value={this.state.first_name}
            placeholder="First Name"
            className="first-and-last"
          />
          &nbsp;
          <input
            type="text"
            onChange={this.update("last_name")}
            value={this.state.last_name}
            placeholder="Last Name"
            className="first-and-last"
          />
        </div>
      );
    }
    return "";
  }

  getZipCode() {
    if (this.props.formType === "Sign Up") {
      return (
        <input
          type="numeric"
          onChange={this.update("zip_code")}
          value={this.state.zip_code}
          placeholder="Zip Code"
          className="zip-code"
        />
      );
    }
  }

  switch() {
    if (this.props.formType === "Sign In") {
      return (
        <div className="switch-link">
          New to Yawp?&nbsp;&nbsp;
          <Link className="link-session" to="/signup">
            Sign Up
          </Link>
        </div>
      );
    } else {
      return (
        <div className="switch-link">
          Aready on Yawp?&nbsp;&nbsp;
          <Link className="link-session" to="/signin">
            Log In
          </Link>
        </div>
      );
    }
  }

  redHeader() {
    if (this.props.formType === "Sign In") {
      return (
        <div>
          <h2>Log In to Yawp</h2>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Sign Up for Yawp</h2>
        </div>
      );
    }
  }

  belowRedHeader() {
    if (this.props.formType === "Sign In") {
      return (
        <div>
          <h2>
            New to Yawp?{" "}
            <Link className="link-session" to="/signup">
              {" "}
              Sign Up
            </Link>{" "}
          </h2>
        </div>
      );
    } else {
      return (
        <div>
          <h2>
            Connect with a great{" "}
            <a className="link-session" href="https://github.com/jhspark17">developer</a>
          </h2>
        </div>
      );
    }
  }

  privacyPolicy() {
    if (this.props.formType === "Sign In") {
      return <div>By logging in, you agree to nothing.</div>;
    } else {
      return <div>By continuing, you agree to nothing.</div>;
    }
  }

  submit() {
    if (this.props.formType === "Sign In") {
      return (
        <div>
          <input
            type="submit"
            onClick={this.handleSubmit}
            value="Log In"
            className="submit"
          />
        </div>
      );
    } else {
      return (
        <div>
          <input
            type="submit"
            onClick={this.handleSubmit}
            value="Sign Up"
            className="submit"
          />
        </div>
      );
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    if (this.props.currentUser) {
      <Redirect to="/" />;
    }
    return (
      <div>
        <header className="header-form">
          <Link className="header-word-logo-decoration" to="/">
            <div id="header-word-logo">
              yawp
              <i id="icon-logo" className="fas fa-globe" />
            </div>
          </Link>
        </header>
        <div className="error-handling-container">
          {this.errorHandling()}
        </div>
        <div className="session-container">
          <div className="session-inner-container">
            <form className="session-form" onSubmit={this.handleSubmit}>
              <div className="red-header-session">{this.redHeader()}</div>
              <div className="below-red-header">
                {this.belowRedHeader()}
              </div>
              <div className="privacy-policy">{this.privacyPolicy()}</div>
              <div>{this.getFirstAndLast()}</div>
              <div>
                <input
                  className="email-password-form"
                  type="text"
                  onChange={this.update("email")}
                  value={this.state.email}
                  placeholder="Email"
                />
                <input
                  className="email-password-form"
                  type="password"
                  onChange={this.update("password")}
                  value={this.state.password}
                  placeholder="Password"
                />
              </div>
              <div>{this.getZipCode()}</div>
              <div>{this.submit()}</div>
              <div className="switch">{this.switch()}</div>
            </form>
            <div className="session-img">
              <img
                src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
