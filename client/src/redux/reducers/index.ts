import { combineReducers } from "redux";

// import { authReducer, AuthState } from './modules/auth';
// import { categoryReducer, CategoriesState } from './modules/categories';
import { plantsReducer, PlantsState } from '../models/plants';

export interface RootState {
  // auth: AuthState,
  // categories: CategoriesState,
  plants: PlantsState,
};

export default combineReducers<RootState>({
  // auth: authReducer,
  // categories: categoryReducer,
  plants: plantsReducer,
});
