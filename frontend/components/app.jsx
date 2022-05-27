import React from 'react';
import Home from './home';
import Footer from './footer';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';
import Categories from './categories';
import { Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import UnderConstruction from './under_construction';
import GreetingContainer from './greetingContainer';
import loginFormContainer from './loginFormContainer';
import signupFormContainer from './signupFormContainer';
import ProductShowContainer from './productShowContainer';
import CategoryIndexContainer from './categoryIndexContainer';
import editReviewFormContainer from './editReviewFormContainer';
import createReviewFormContainer from './createReviewFormContainer';
import cartIndexContainer from './cartIndexContainer';
import PurchasePage from './purchasePage';
import CartGreeting from './cartGreeting';
import CartGreetingContainer from './cartGreetingContainer';
import HomeContainer from './homeContainer';

const App = () => (
  <div>
    <header>
      <nav id="header-black">
        <Link to="/"><img src={window.logo} id="logo" /></Link>
        <SearchBar />
        <GreetingContainer />
        <CartGreetingContainer />
      </nav>
      <Categories />
    </header>
     
    <div id="body">
      <Switch>
        <AuthRoute path="/login" component={loginFormContainer} />
        <AuthRoute path="/signup" component={signupFormContainer} />
        <Route path="/cart" component={cartIndexContainer} />
        <Route path="/categories/:category" component={CategoryIndexContainer} />
        <Route path="/products/:productId/review/:reviewId/edit" component={editReviewFormContainer} />
        <Route path="/products/:productId/review" component={createReviewFormContainer} />
        <Route path="/products/:productId" component={ProductShowContainer} />
        <Route path="/payment" component={PurchasePage} />
        <Route path="/under_construction" component={UnderConstruction} />
        <Route exact path="/" component={HomeContainer} />
        <Redirect to="/under_construction" />
      </Switch>
    </div>
    <footer>
      <Footer/>
    </footer>
  </div>
);

export default App;

