import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Shelf from './Pages/Shelf';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Thnx from './Pages/Thnx';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Shelf} />
      <Route path="/cart/" component={Cart} />
      <Route path="/checkout/" component={Checkout} />
      <Route path="/thnx/" component={Thnx} />
    </Router>
  );
}

export default App;
