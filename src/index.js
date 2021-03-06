import React from 'react';
import ReactDOM from 'react-dom';
import App from './rootcomponent/app';

import {Provider}  from "react-redux";
import { createStore } from "redux";

import allReducers  from "./reducers/combine-red";
const reduxStore = createStore(allReducers)
ReactDOM.render(
    <Provider store = {reduxStore}><App></App></Provider>
 ,document.getElementById('root')
)