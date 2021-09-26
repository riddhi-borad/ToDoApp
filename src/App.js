import React from 'react';
import Header from './Component/Header';
import Add from './Component/Add';
import View from './Component/View';
import Edit from './Component/Edit';
import {Provider} from './Component/Context';
import {BrowserRouter as Router,Route,HashRouter} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Provider>
      <HashRouter basename='/'>
        <Route path='/' component={Header}></Route>
        <Route path='/add-list' component={Add}></Route>
        <Route path='/edit-list/:id' component={Edit}></Route>
        <Route path='/view-list' component={View}></Route>
        </HashRouter>
      </Provider>
      </Router>
  );
}
export default App;
