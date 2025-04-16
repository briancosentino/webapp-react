import React, { useEffect, useState } from 'react'

const Home = () => {
    const [movies, setMovies] = useState(null)
    const fetchMovies = () => {
        fetch('http://localhost:3002/movies/')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => console.error(err))
    }
    useEffect(() => {
        fetchMovies()
    }, [])

    console.log(movies);

    return (
        <div>
            Home
        </div>
    )
}

export default Home
