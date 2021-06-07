import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ShoppingList/>
    </div>
  );
}

export default App;
