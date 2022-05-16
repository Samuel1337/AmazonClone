import React from 'react';
<<<<<<< HEAD
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <p>Front End Routes Exist</p>
    <Switch>
      <Route exact path="/category/products" component={CategoryProductsIndex} />
      <Route exact path="/products/:productId" component={ProductShow} />
      <Route exact path="/reviews/new" component={CreateReviewForm} />
      <Route exact path="/reviews/:productId/edit" component={EditReviewForm} />
      <Route exact path="/cart" component={CartIndex} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={Home} />
=======
import { Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greetingContainer';
import loginFormContainer from './loginFormContainer';
import signupFormContainer from './signupFormContainer';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
      <h1>Front End Routes Online</h1>
    </header>
      <AuthRoute path="/login" component={loginFormContainer} />
      <AuthRoute path="/signup" component={signupFormContainer} />
    {/* <Switch>
      <Route path="/category/products" component={CategoryProductsIndex} />
      <Route path="/products/:productId" component={ProductShow} />
      <Route path="/reviews/new" component={CreateReviewForm} />
      <Route path="/reviews/:productId/edit" component={EditReviewForm} />
      <Route path="/cart" component={CartIndex} />
      <Route path="/" component={Home} />
>>>>>>> user-auth
      <Redirect to="/" />
    </Switch> */}
  </div>
);

export default App;

