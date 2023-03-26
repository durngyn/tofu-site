import React from 'react'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'
import styles from './Search.module.css'

export default function Search() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = 'http://localhost:3000/recipes?q=' + query
    const { error, isPending, data } = useFetch(url)

    return (
        <div className={styles.search}>
            <div className={styles.titlewrap}>
                <h2 className={styles.title}>Recipes including "{query}"</h2>
            </div>
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}
