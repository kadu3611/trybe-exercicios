// src/store/index.js
import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import App from './App';

import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';
const rootReducer = combineReducers({ clickReducer });

const store = createStore(rootReducer);

export default store;