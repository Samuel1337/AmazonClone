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
        if (this.props.formType === "Sign Up") {
            return (
                <p><Link to="/login">Log In</Link> Instead</p>
                )
            } else {
                return (
                <p><Link to="/signup">Sign Up</Link> Instead</p>
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
            <div>
                <h1>{formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button>{formType}</button>
                    {this.redirect()}
                    {this.errors()}
                 </form>
            </div>
        );
    }
  }

export default SessionForm;