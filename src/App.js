import { useState } from 'react';
import './App.css';
import BurgerStack from './components/BurgerStack';
import IngredientsList from './components/IngredientsList';

import ingredients from './ingredients'

function App() {
  const [addedIngredients, setAddedIngredients] = useState([])

  const addIngredient = (ingredient) => {
    console.log(ingredient)
    setAddedIngredients([ingredient, ...addedIngredients])
  }

  const resetIngredients = () => {
    setAddedIngredients([])
  }

  return (
    <div className="App">
      <h1>Burger Stacker</h1>
      <main>
        <IngredientsList 
          addIngredient={addIngredient} 
          ingredients={ingredients}
        />
        <BurgerStack 
          addedIngredients={addedIngredients} 
          resetIngredients={resetIngredients}
        />
      </main>
    </div>
  )
}

export default App;
