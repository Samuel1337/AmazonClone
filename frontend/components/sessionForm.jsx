import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
      super(props);
        
      this.state = {
        username: "",
        password: ""
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.update = this.update.bind(this);
      this.redirect = this.redirect.bind(this);
      this.email = this.email.bind(this);
      this.intro = this.intro.bind(this);
      this.errors = this.errors.bind(this);
    }
  
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    redirect() {
        if (this.props.formType === "Sign-Up") {
            return (
                <button><Link to="/login">Click here to Sign-In</Link></button>
                )
            } else {
                return (
                <button><Link to="/signup">Create an account</Link></button>
            )
        }
    }

    email() {
        if (this.props.formType === "Sign-Up") {
            return (
                <>
                    <label id="session-label">
                        Email:
                    </label>
                    <br />
                    <input
                        type="text"
                    />
                    <br />
                </>
            )
        }
    }

    intro() {
        if (this.props.formType === "Sign-Up") {
            return (
                <span>Already have an account?</span>
            )
        } else {
            return (
                <span>New to Euphrates?</span>
            )
        }
    }

    errors() {
        const { errors } = this.props
        if (errors && errors.length > 0) {
            let errorArr = errors.map(error => {
                return <p>{error}</p>
            });
            console.log(errors);
            console.log(errorArr);
            return errorArr;
        }
    }

    render(){
        const { formType } = this.props;

        return (
            <div id="session-page">
                <img src="app/assets/images/logo_white.png" />
                <nav id="session-box">
                    <h1>{formType}</h1>
                    <form onSubmit={this.handleSubmit}>
                    <nav id="session-inputs">
                            <label id="session-label">
                                Name:
                            </label>
                            <br />
                                <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    />
                            <br />
                            {this.email()}
                            <label id="session-label">
                                Password:
                            </label>
                            <br />
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    />
                            <br />
                        </nav>    
                        <div id="session-errors">
                            {this.errors()}
                        </div>
                        <nav id="session-buttons">
                            <button>{formType}</button>
                            <br />
                            <button>Demo User</button>
                            {this.intro()}
                            {this.redirect()}
                        </nav>
                    </form>
                </nav>
                <br />
            </div>
        );
    }
  }

export default SessionForm;