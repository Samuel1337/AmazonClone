import createReviewFormContainer from './createReviewFormContainer';
import editReviewFormContainer from './editReviewFormContainer';
import CategoryIndexContainer from './categoryIndexContainer';
import CartGreetingContainer from './cartGreetingContainer';
import ProductShowContainer from './productShowContainer';
import SearchPageContainer from './searchPageContainer';
import CategoriesContainer from './categoriesContainer';
import signupFormContainer from './signupFormContainer';
import loginFormContainer from './loginFormContainer';
import SearchBarContainer from './searchBarContainer';
import cartIndexContainer from './cartIndexContainer';
import GreetingContainer from './greetingContainer';
import UnderConstruction from './under_construction';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './homeContainer';
import { AuthRoute } from '../util/route_util';
import PurchasePage from './purchasePage';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './footer';
import React from 'react';

const App = () => {
  if (window.innerWidth < 1000) {
    return (
      <div class="unsupported">
        <br/>
        <span>Unsupported Screen Size</span>
        <br/>
        <span>Mobile Version Coming Soon</span>
        <br/>
        <img src={window.logo_blue} alt="" />
      </div>
    )
  }

  return (
  <div>
    <header>
      <nav id="header-black">
        <Link to="/"><img src={window.logo} id="logo" /></Link>
        <SearchBarContainer />
        <GreetingContainer />
        <CartGreetingContainer />
      </nav> 
      <CategoriesContainer />
    </header>
     
    <div id="body">
      <Switch>
        <AuthRoute path="/login" component={loginFormContainer} />
        <AuthRoute path="/signup" component={signupFormContainer} />
        <Route path="/cart" component={cartIndexContainer} />
        <Route path="/search" component={SearchPageContainer} />
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
)};

export default App;

