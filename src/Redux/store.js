import { combineReducers, configureStore } from '@reduxjs/toolkit';
import eventsSlice from './EventsSlice';

const eventsReducers = combineReducers({
    Events: eventsSlice,
  });

const store = configureStore({
  reducer: eventsReducers
})

export default store;