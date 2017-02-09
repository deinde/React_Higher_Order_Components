import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router,Route,browserHistory} from 'react-router';
import App from './components/app';
import reducers from './reducers';
import Resources from './components/resources';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware()(createStore);
//setting up routes without importing them 
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <Router history={browserHistory} >
    <Route path='/' component={App}>
    <Route path='/resources' component={Resources}/>
    </Route>
   </Router>
  </Provider>
  , document.querySelector('.container'));
