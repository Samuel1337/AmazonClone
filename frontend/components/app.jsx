import React from 'react';
import { Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greetingContainer';
import loginFormContainer from './loginFormContainer';
import signupFormContainer from './signupFormContainer';
import Home from './home';

const App = () => (
  <div>
    <header>
      <nav id="header-black">
        <img src="../../app/assets/images/logo.png" />
        <GreetingContainer />
      </nav>
      <nav id="header-blue">
        <a href="">All Products</a>
        <a href="">Baby</a>
        <a href="">Beauty &#38; Personal Care</a>
        <a href="">Fashion</a>
        <a href="">Fitness</a>
        <a href="">Home Decor</a>
        <a href="">Kitchen</a>
        <a href="">Maternity</a>
        <a href="">Smart Home</a>
        <a href="">Gift Idea</a>
      </nav>
    </header>
    <Switch>
      <AuthRoute path="/login" component={loginFormContainer} />
      <AuthRoute path="/signup" component={signupFormContainer} />
      <Route path="/" component={Home} />
    </Switch>
      {/* <Route path="/category/products" component={CategoryProductsIndex} />
      <Route path="/products/:productId" component={ProductShow} />
      <Route path="/reviews/new" component={CreateReviewForm} />
      <Route path="/reviews/:productId/edit" component={EditReviewForm} />
      <Route path="/cart" component={CartIndex} />
      <Redirect to="/" /> */}
  </div>
);

export default App;

