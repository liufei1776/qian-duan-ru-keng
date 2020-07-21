import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import GoodsInput from './components/goods-input.js';
import GoodsList from './components/goods-list.js';
import GoodsTotal from './components/goods-total.js';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/add">
          <GoodsInput/>
        </Route>
        <Route path="/index">
          <Redirect to="/" />
        </Route>
        <Route exact path="/">
          <GoodsList/>
          <GoodsTotal/>
        </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
