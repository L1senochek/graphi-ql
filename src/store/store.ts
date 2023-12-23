import { combineReducers, configureStore } from '@reduxjs/toolkit';
import languageSlice from './slices/languageSlice';
import authSlice from './slices/authSlice';
import documentationSlice from './slices/documentationSlice';
import queryEditorSlice from './slices/queryEditorSlice';
import headersEditorSlice from './slices/headerEditorSlice';

const rootReducer = combineReducers({
  languageSlice: languageSlice.reducer,
  authSlice: authSlice.reducer,
  documentationSlice: documentationSlice.reducer,
  queryEditorSlice: queryEditorSlice.reducer,
  headersEditorSlice: headersEditorSlice.reducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
export default store;
