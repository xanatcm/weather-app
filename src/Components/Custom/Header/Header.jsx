import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({children}) => {
    return (
        <header className="bg-navy h-24 flex justify-center items-center box-border">
            <h1 className="text-pink  text-3xl font-bold" > <Link to="/"> Weather app </Link> </h1>
            {children}
        </header>           
    )
}

export default Header
