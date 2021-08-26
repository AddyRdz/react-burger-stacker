import React from 'react';
import IngredientsList from './components/IngredientsList';
import BurgerStack from './components/BurgerStack';
import ingredients from './ingredients';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Burger Stacker</h1>
        <main className="main">
          <IngredientsList />
          <BurgerStack />
        </main>
    </div>
  );
}

export default App;
