import styles from './Ingredients.module.css';
import React from 'react';

export default function RecipeIngredients() {
    let ingredients = ["butter", "sugar", "flour", "eggs", "baking soda"];
    return (
    <div>
    <h3>Recipe Ingredients</h3>
    <ul className = {styles.ingredientList}>
       <li>{ingredients[0]}</li>
       <li>{ingredients[1]}</li>
       <li>{ingredients[2]}</li>
       <li>{ingredients[3]}</li>
       <li>{ingredients[4]}</li>
    </ul>
 </div>
    )
}