import React, { useEffect } from 'react'
import styles from './Create.module.css'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'


export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredients, setNewIngredients] = useState('')
    const [ingredients, setIngredients] = useState([])
    const ingredientsInput = useRef(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const doc = { title, ingredients, method, cookingTime: cookingTime + ' minutes' }

        try {
            await projectFirestore.collection('recipes').add(doc)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const ing = newIngredients.trim()

        if (ing && !ingredients.includes(ing)) {
            setIngredients(prevIngredients => [...prevIngredients, ing])
        }
        setNewIngredients('')
        ingredientsInput.current.focus()
    }

    return (
        <div className={styles.page}>
            <div className={styles.create}>
                <h2>Add a New Recipe</h2>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <label>
                        <span>Recipe title:</span>
                        <input
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            required
                        />
                    </label>

                    <label className={styles.ingredient}>
                        <span>Recipe Ingredients:</span>
                        <div className={styles.ingredients}>
                            <input
                                className={styles.box}
                                type="text"
                                onChange={(e) => setNewIngredients(e.target.value)}
                                value={newIngredients}
                                ref={ingredientsInput}
                            />
                            <button onClick={handleAdd}>Add</button>
                        </div>
                        <p className={styles.list}>Current ingredients: {ingredients.map(i => <em key={i}> <br />-{i} </em>)}</p>
                    </label>

                    <label className={styles.method}>
                        <span>Recipe method:</span>
                        <textarea
                            onChange={(e) => setMethod(e.target.value)}
                            value={method}
                            required
                        />
                    </label>

                    <label className={styles.time}>
                        <span>Cooking time (minutes):</span>
                        <input
                            type="number"
                            onChange={(e) => setCookingTime(e.target.value)}
                            value={cookingTime}
                            required
                        />
                    </label>

                    <button className={styles.submit}>Submit</button>
                </form>

            </div>
        </div>
    )
}
