import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoader } from '../components/LoaderContext'
import Loader from '../components/Loader'

const Home = () => {
    const [movies, setMovies] = useState(null)
    const { setIsLoading } = useLoader()
    const fetchMovies = () => {
        setIsLoading(true)
        fetch('http://localhost:3002/movies/')
            .then(res => res.json())
            .then(data => {
                setMovies(data)
                setIsLoading(false)
            })
            .catch(err => {
                console.error(err)
                setIsLoading(false)
            })
    }
    useEffect(() => {
        fetchMovies()

    }, [])

    console.log(movies);

    return (
        <>
            <Loader />
            <div className='flex flex-wrap  '>
                {movies?.map(movie => (
                    <div key={`movie ${movie.id}`} className="p-2 cursor-pointer w-1/3  ">
                        <Link to={`/movie/${movie.id}`}>
                            <div className='p-2 '>

                                <img className='w-full block max-h-[400px] ' src={`http://localhost:3002/${movie.image}`} alt={movie.title} />

                            </div>
                        </Link>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Home
