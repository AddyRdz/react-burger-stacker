function IngredientsList(props) {
    return (
        <div>
            <h2>Available Ingredients</h2>
            <ul className="available-ingredients">
                {props.ingredients.map((ingredient, idx) => {
                    return (
                        <li 
                            key={idx} 
                            style={{ backgroundColor: ingredient.color }}
                            onClick={() => props.addIngredient(ingredient)}
                        >
                            {ingredient.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default IngredientsList;
