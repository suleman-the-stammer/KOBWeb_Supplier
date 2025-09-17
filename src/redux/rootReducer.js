import { combineReducers } from "@reduxjs/toolkit";

// Slices :
import signInReducer from "./slices/auth/signinSlice";
import locationsReducer from "./slices/locationsSlice";
import categoriesReducer from "./slices/categoriesSlice";
import registerReducer from "./slices/auth/registerSlice";
import securityQuestionsReducer from "./slices/securityQuestionSlice";
import verifyOTPSliceReducer from "./slices/verifyOTP";


const rootReducer = combineReducers({
  signIn: signInReducer,
  register: registerReducer,
  locations: locationsReducer,
  categories: categoriesReducer,
  verifyOTP: verifyOTPSliceReducer,
  security: securityQuestionsReducer,
});

export default rootReducer;
