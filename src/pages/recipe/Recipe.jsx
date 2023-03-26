import React from 'react'
import styles from './Recipe.module.css'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

export default function Recipe() {
    const { id } = useParams()
    const url = "http://localhost:3000/recipes/" + id
    const { data: recipe, isPending, error } = useFetch(url)
    return (
        <div className={styles.recipe}>
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {recipe && (
                <>
                    <h2>{recipe.title}</h2>
                    <p className={styles.time}>Takes {recipe.cookingTime}</p>
                    <ul>
                        <p className={styles.ing}>Ingredients: </p> {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className={styles.method}>{recipe.method}</p>
                </>
            )}
        </div>
    )
}
