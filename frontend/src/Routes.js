// src/Routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';
// Diğer sayfalar burada eklenecek...

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/products" component={ProductPage} />
        {/* Diğer sayfa rotaları burada eklenecek... */}
      </Switch>
    </Router>
  );
};

export default Routes;
