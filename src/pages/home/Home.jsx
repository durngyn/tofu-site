import React from 'react'
import styles from './Home.module.css'
import { useFetch } from '../../hooks/useFetch'
import { useEffect } from 'react'

import RecipeList from '../../components/RecipeList'

export default function Home() {
    const { data, isPending, error } = useFetch("http://localhost:3000/recipes")

    return (
        <div className={styles.home}>
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}
