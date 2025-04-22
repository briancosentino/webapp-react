import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MoviePage = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [name, setName] = useState(null)
    const [text, setText] = useState(null)
    const [vote, setVote] = useState(null)
    const [success, setSuccess] = useState(false)

    const fetchMovie = () => {
        fetch(`http://localhost:3002/movies/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(err => console.error(err))


    }
    useEffect(() => {
        fetchMovie()
    }, [movie])

    function addReview(e) {
        e.preventDefault()
        fetch('http://localhost:3002/movies/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'movie_id': id,
                'name': name,
                'vote': vote,
                'text': text,
            })
        })
            .then(res => res.json())
            .then(() => {
                setSuccess(true)
                setIsModalOpen(false)
            })
    }




    return (
        <div className='flex relative gap-8'>
            {success && (
                <div className="fixed w-full h-full z-50 inset-0 flex items-center justify-center">
                    <div className='w-[400px] pt-8 text-center bg-white shadow rounded-md'>
                        <div className='text-xl text-green-600'><i className='fa-regular fa-circle-check'></i></div>
                        <p>Recensione aggiunta con successo</p>
                        <button onClick={() => setSuccess(false)} className='mt-4 py-3 border-t border-stone-300 w-full'>Ok</button>
                    </div>
                </div>
            )}
            {isModalOpen && !success && (
                <>
                    {/* Overlay scuro */}
                    <div className="fixed inset-0 bg-black opacity-70" />
                    {/* Modale */}
                    <div className="fixed inset-0 flex items-center justify-center">
                        <form onSubmit={addReview} className="bg-white p-6 rounded-lg w-[500px]">
                            <label className='text-sm mb-1' htmlFor="name">Nome</label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                className='w-full  rounded-md border border-stone-300 bg-white placeholder:text-stone-700 p-2'
                                type="text"
                                placeholder='Inserisci il tuo nome'
                            />
                            <div className="my-4">

                                <label className='w-full block mb-1 text-sm' htmlFor="vote">Voto</label>
                                <select onChange={(e) => setVote(e.target.value)} className='w-1/3 border border-stone-300 rounded-md p-1 ' name="vote" id="vote">

                                    {[1, 2, 3, 4, 5].map(vote => (
                                        <option key={vote} value={vote} >{vote}</option>
                                    ))}
                                </select>
                            </div>
                            <textarea
                                onChange={(e) => setText(e.target.value)}
                                name="text"
                                id="text"
                                className='w-full rounded-md border border-stone-300 bg-white placeholder:text-stone-700 p-2'
                                placeholder='Scrivi qui la tua recensione...'
                                rows="4"
                            />
                            <button type="submit" className='rounded-md bg-sky-700 text-white py-2 px-3 mt-3'>Aggiungi</button>
                        </form>
                    </div>
                </>
            )}
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
                        <div className='w-full flex justify-end'>
                            <button onClick={() => setIsModalOpen(true)} className='bg-sky-700 text-white rounded-lg py-2 px-4'>Add review</button>
                        </div>
                    </div>
                </>
            )

            }
        </div >
    )
}

export default MoviePage
