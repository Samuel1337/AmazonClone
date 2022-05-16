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
                <button><Link to="/login">Click Here to Sign-In</Link></button>
                )
            } else {
                return (
                <button><Link to="/signup">Click Here to Sign-Up</Link></button>
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
                            <label id="session-label">
                                Email:
                            </label>
                            <br />
                                <input
                                    type="text"
                                    />
                            <br />
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
                        <nav id="session-buttons">
                            <button>{formType}</button>
                            <br />
                            <button>Demo User</button>
                            <span>Already have an account?</span>
                            {this.redirect()}
                        </nav>
                    </form>
                </nav>
                <br />
                {this.errors()}
            </div>
        );
    }
  }

export default SessionForm;