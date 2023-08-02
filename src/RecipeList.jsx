import React from 'react'
import styles from './RecipeList.module.css'
import { Link } from 'react-router-dom'
import { BsTrashFill } from "react-icons/bs";
import { projectFirestore } from './firebase/config'

export default function RecipeList({ recipes }) {

    if (recipes.length === 0) {
        return <div>No recipes to load...</div>
    }

    const handleClick = (id) => {
        projectFirestore.collection('recipes').doc(id).delete()
    }
    return (
        <div className={styles.main}>
            {recipes.map(recipe => (
                <div className={styles.recipe} key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link className={styles.link} to={`/recipes/${recipe.id}`}>Cook this</Link>
                    <BsTrashFill
                        className={styles.delete}
                        onClick={() => handleClick(recipe.id)}
                    />
                </div>
            ))}
        </div >
    )
}
