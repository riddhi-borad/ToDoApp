import React from 'react';
import Header from './Component/Header';
import Add from './Component/Add';
import View from './Component/ViewList';
import Edit from './Component/Edit';
import {Provider} from './Component/Context';
import {BrowserRouter as Router,Route,HashRouter} from 'react-router-dom';
function App() {
  return (
    <HashRouter basename='/'>
    {/* <Router> */}
      <Provider>
      
        <Route  path='/' component={Header}></Route>
        <Route path='/add-list' component={Add}></Route>
        </Provider>
        {/* <Route path='/edit-list/:id' component={Edit}></Route> */}
        <Route path='/view-list' component={View}></Route>
        
      
      {/* </Router> */}
      </HashRouter>
  );
}
export default App;
