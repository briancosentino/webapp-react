import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full p-8 flex justify-between items-center'>
            <div className='text-3xl'>Logo</div>
            <ul className='flex gap-4'>
                <li><Link to={'/'}>Home</Link></li>


            </ul>

        </div>
    )
}

export default Navbar
