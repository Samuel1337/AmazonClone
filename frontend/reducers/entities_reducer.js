import { combineReducers } from "redux";
import productsReducer from "./products_reducer";
import reviewsReducer from "./reviewsReducer";

import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;