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
      this.demo = this.demo.bind(this);
      this.demoHelper = this.demoHelper.bind(this);
      this.errors = this.errors.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
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
                <Link id="redirect" to="/login"><button>Click here to Sign-In</button></Link>
                )
            } else {
                return (
                <Link id="redirect" to="/signup"><button>Create an account</button></Link>
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
                        id="session-email"
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

    demo() {
        const demoUser = {
            username: "Demo",
            password: "123456"
        }
        let username = demoUser.username;
        let email = "demo@aol.com";
        let password = demoUser.password;

        let usernameInput = document.getElementById("session-username");
        let emailInput = document.getElementById("session-email");
        let passwordInput = document.getElementById("session-password");

        this.demoHelper(username, usernameInput);
        if (emailInput) {
            this.demoHelper(email, emailInput);
        }
        this.demoHelper(password, passwordInput);
        
        setTimeout(() => {
            const user = Object.assign({}, {username: "Demo", password: "123456"});
            this.props.demoLogin(user);
        }, 1500);
    }

    demoHelper(content, field) {
        field.value = "";
        let partial = "";
        for (let i = 0; i < content.length; i++) {
            const char = content[i];
            setTimeout(() => {
                partial += char;
                console.log(partial)
                field.value = partial;
            }, 500);
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
                
                <img src={window.logo_white} id="logo" />
                <nav id="session-box">
                    <h1>{formType}</h1>
                    <form onSubmit={this.handleSubmit}>
                    <nav id="session-inputs">
                            <label id="session-label">
                                Name:
                            </label>
                            <br />
                                <input
                                    id="session-username"
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
                                    id="session-password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    />
                            <br />
                        <div id="session-errors">
                            {this.errors()}
                        </div>
                            <button>{formType}</button>
                            <br />
                        </nav>    
                    </form>
                    <nav id="session-buttons">
                        <button onClick={this.demo}>Demo User</button>
                        {this.intro()}
                        {this.redirect()}
                    </nav>
                </nav>
                <br />
            </div>
        );
    }
  }

export default SessionForm;