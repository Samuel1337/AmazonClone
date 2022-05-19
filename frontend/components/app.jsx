import React from 'react';
import { Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greetingContainer';
import loginFormContainer from './loginFormContainer';
import signupFormContainer from './signupFormContainer';
import UnderConstruction from './under_construction';
import Home from './home';
import { Link } from 'react-router-dom';
import Categories from './categories';
import Footer from './footer';
import CategoryIndexContainer from './categoryIndexContainer';

const App = () => (
  <div>
    <header>
      <nav id="header-black">
        <Link to="/"><img src={window.logo} id="logo" /></Link>
        <GreetingContainer />
      </nav>
      <Categories />
    </header>
     
    <div id="body">
      <Switch>
        <AuthRoute path="/login" component={loginFormContainer} />
        <AuthRoute path="/signup" component={signupFormContainer} />
        <Route path="/categories/:category" component={CategoryIndexContainer} />
        <Route path="/under_construction" component={UnderConstruction} />
        <Route exact path="/" component={Home} />
        <Redirect to="/under_construction" />
      </Switch>
        {/* <Route path="/products/:productId" component={ProductShow} />
        <Route path="/reviews/new" component={CreateReviewForm} />
        <Route path="/reviews/:productId/edit" component={EditReviewForm} />
        <Route path="/cart" component={CartIndex} />
      </Switch> */}
    </div>
    <footer>
      <Footer/>
    </footer>
  </div>
);

export default App;

