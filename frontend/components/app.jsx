import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <p>Front End Routes Exist</p>
    <Switch>
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/category/products" component={CategoryProductsIndex} />
      <Route exact path="/products/:productId" component={ProductShow} />
      <Route exact path="/reviews/new" component={CreateReviewForm} />
      <Route exact path="/reviews/:productId/edit" component={EditReviewForm} />
      <Route exact path="/cart" component={CartIndex} />
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;