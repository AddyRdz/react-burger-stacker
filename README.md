# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Burger Stacker

You will be writing an app that simulates the stacking of a burger. You are provided an array of ingredients and you need to make an app the displays all the ingredients on the left side and has an area on the right where the ingredients can be stacked to make a burger.

Here is a rough wireframe of the general layout:

![Burger Stacker](./misc/Burger-Stacker.png)

## [Here is a working demo deployed on Heroku](https://burger-stacker-706.herokuapp.com)

___
## User Stories

* As a user, I want to see all available burger ingredients listed on the left side.
* I want the ability to add any ingredient onto the burger stack using a button.
* I want to see each ingredient I select added to the top of the burger stack on the right side.
* I want the ability to clear the burger stack so I can start again.
* I want to be able to add as many ingredients of any type as I want (ingredients don't go away.)

___
## Suggested Ways To Get Started

1. Clone down this repo.
1. Take a moment to familiarize yourself with the starter code.
1. Decide what components you may need.
1. Decide what information you will need pass as props to each component.
1. Decide what the state should be (hint: state will be the information on the page that changes over time).
1. Decide where the state should live.
1. Write a handler function that listens for when an ingredient is clicked and updates state.
1. When state updates we should see an ingredient added to the Burger Stack on the right side of the screen.

### Sample Idea for Component Hierarchy:

```
App
|--IngredientList
|  |--Ingredient(s)
|
|--BurgerStack
|  |--Ingredient(s)
```

### Starter Data:

Here are some ingredients to get you started in the `ingredients.js` file. Feel free to change them or add more.

```js
[
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]
```

<details>
  <summary>Help! I don't know where to start!</summary>

  ---

  In App.js, start by setting up the scaffolding for you app.
  - You'll probably want a component for the Ingredients List and a component for the Burger Stack living inside of your app component.
  - You'll want to pull in `ingredients` from the `ingredients.js` file.

  ```js
  import React from 'react';
  import IngredientsList from './components/IngredientsList';
  import BurgerStack from './components/BurgerStack';
  import ingredients from './ingredients';
  import './App.css';

  class App extends React.Component {
    state = {
      addedIngredients: []
    }

    render() {
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
  }

  export default App;
  ```

</details>

<details>
  <summary>Ok, I'm stuck again...</summary>

  ---

  Start by seeing if a you can get the list of ingredients showing up in the `IngredientsList` component.
  - Start by passing the ingredients as a prop  from the `App` component to the `IngredientsList` component.
  - Inside of the `IngredientsList` component loop through those ingredients being pass in to create an array of `<li>` tags.

  Give it a try first and then if you get stuck take a look at this exampmle code.
  <details>
    <summary></summary>

    In IngredientsList.js
    ```
    function IngredientsList(props) {
      function renderIngredients() {
        return props.ingredients.map((ingredient, idx) => {
          return (
            <li 
              key={idx}
              style={{backgroundColor: ingredient.color}}
            >
              {ingredient.name}
            </li>
          );
        });
      }

      return (
        <div>
          <h3>Available Ingredients</h3>
          <ul>
            {renderIngredients()}
          </ul>
        </div>
      )
    }

    export default IngredientsList;
    ```
  </details>

  ---

  - Once you have your list of ingredients showing up the next step is to listen for a click on each of the ingredients.
  - When one of those ingredients is clicked you want to add it to `addedIngredients` in the state of `App` component.
</details>

___
## BONUSES

* Each ingredient has an associated color. Use this to give each ingredient a nice background color reminiscent of what it looks like in real life.
* Add a form component (simply text input and button) to the ingredient side that lets a user add a new ingredient to the master list of ingredients. If you do this, the ingredients would change over time and would need to live in state.
* Add the ability to "undo" the last ingredient added (only the last one) by clicking a button that will remove that ingredient. Only that top ingredient should have the button for this showing up. When that ingredient is removed, the next one down should then get the button that allows it to be removed. **HINT**: You probably need to add this button to the top `Ingredient` when you render it in the `BurgerStack` component.
___
## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
