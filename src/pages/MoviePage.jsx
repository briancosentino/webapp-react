import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MoviePage = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const fetchMovie = () => {
        fetch(`http://localhost:3002/movies/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(err => console.error(err))


    }
    useEffect(() => {
        fetchMovie()
    }, [])


    console.log(movie);

    return (
        <div className='flex gap-8'>
            {movie && (
                <>
                    <div className='w-1/3 h-full'>
                        <img className='w-full' src={`http://localhost:3002/${movie[0].image}`} alt={movie[0].title} />
                    </div>
                    <div className='w-2/3'>
                        <h1 className='text-3xl'>{movie[0].title}</h1>
                        <p className='my-4'> {movie[0].abstract} </p>
                        <p><span className='font-bold'>Anno: </span>{movie[0].release_year}</p>
                        <p className='my-3'><span className='font-bold'>Genere: </span>{movie[0].genre}</p>
                        <p><span className='font-bold'>Diretto da: </span>{movie[0].director}</p>

                        <h2 className='mt-8 mb-4 font-semibold'>Reviews</h2>
                        {movie?.map(review => (
                            <div key={review.id} className='p-4 mb-4 bg-stone-50 border border-stone-300 rounded-sm'>
                                <div className='font-semibold text-md'>{review.name} <span className='ml-4 font-medium text-sm'>{review.vote}/5</span></div>
                                <p className='mt-4'>{review.text}</p>

                            </div>
                        ))}
                    </div>
                </>
            )

            }
        </div>
    )
}

export default MoviePage
