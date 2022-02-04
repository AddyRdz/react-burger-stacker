function BurgerStack(props) {
    return (
        <div>
            <h2>Burger Stack</h2>
            <ul className="added-ingredients">
                { props.addedIngredients.map((ingredient, idx) => {
                    return (
                        <li
                            key={idx} 
                            style={{ backgroundColor: ingredient.color }}
                        >
                            { ingredient.name }
                        </li>
                    )
                }) }
            </ul>
            <button onClick={props.resetIngredients}>Clear Ingredients</button>
        </div >
    )
}

export default BurgerStack;
