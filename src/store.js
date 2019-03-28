import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import rootReducer from '~/reducers';
import { initialState } from '~/defaults';
import reduxLogic from '~/logic';
import axios from 'axios';

const logic = createLogicMiddleware(reduxLogic, { httpClient: axios });

const configureStore = (initialState = {}) => createStore(
	rootReducer,
	initialState,
	applyMiddleware(logic),
);

const store = configureStore(initialState);

export const getStore = $=> store;
