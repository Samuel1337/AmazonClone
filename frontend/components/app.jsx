import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <div>
    <p>Front End Routes Exist</p>
    <Routes>
      <Route exact path="/category/products" element={<CategoryProductsIndex/>} />
      <Route exact path="/products/:productId" element={<ProductShow/>} />
      <Route exact path="/reviews/new" element={<CreateReviewForm/>} />
      <Route exact path="/reviews/:productId/edit" element={<EditReviewForm/>} />
      <Route exact path="/cart" element={<CartIndex/>} />
      <Route exact path="/login" element={<LoginFormContainer/>} />
      <Route exact path="/signup" element={<SignupFormContainer/>} />
      <Route exact path="/" element={<Home/>} />
      <Redirect to="/" />
    </Routes>
  </div>
);

export default App;

