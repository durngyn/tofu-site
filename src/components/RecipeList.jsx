import React from 'react'
import styles from './RecipeList.module.css'
import { Link } from 'react-router-dom'

export default function RecipeList({ recipes }) {
    return (
        <div className={styles.main}>
            {recipes.map(recipe => (
                <div className={styles.recipe} key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link className={styles.link} to={`/recipes/${recipe.id}`}>Cook this</Link>
                </div>
            ))}
        </div >
    )
}
