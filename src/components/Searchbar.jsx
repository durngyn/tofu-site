import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Searchbar() {
    const [term, setTerm] = useState('')
    const navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault()

        navigate(`/search?q=${term}`)
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <label htmlFor="search">Search:</label>
                <input
                    type="text"
                    id="search"
                    onChange={(e) => setTerm(e.target.value)}
                    required
                />
            </form>
        </div>
    )
}
