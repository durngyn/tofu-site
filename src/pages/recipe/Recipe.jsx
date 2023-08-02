import React, { useEffect, useState } from 'react'
import styles from './Recipe.module.css'
import { useParams } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'

export default function Recipe() {
    const { id } = useParams()

    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsPending(true)

        projectFirestore.collection('recipes').doc(id).get().then(doc => {
            if (doc.exists) {
                setIsPending(false)
                setRecipe(doc.data())
            } else {
                setIsPending(false)
                setError('Could not find that recipe')
            }
        })
    }, [id])

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
