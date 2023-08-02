import styles from './Nav.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Searchbar from '../Searchbar.jsx'

export default function Nav() {
    return (
        <div className={styles.nav}>
            <NavLink to="/">
                <h1 className={styles.title}>Tofu Shop</h1>
                <p>created by: Darren N.</p>
            </NavLink>
            <Searchbar />
            <div className={styles.nav_right}>

                <NavLink to="/create">
                    <button className={styles.btn}>Create Recipe</button>
                </NavLink>
            </div>

        </div>
    )
}
