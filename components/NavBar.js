import React from 'react'
import Link from 'next/link'

const NavLink = ({ href, children }) => {
    return (
        <Link href={href}>
            <a className='duration-300 p-2 text-white hover:text-pink-600 font-bold italic'>{children}</a>
         </Link>

    )
}

const NavBar = () => {
    return (
        <div className="bg-pink-900 py-4 text-center">
            <NavLink href='/sobre'>Sobre</NavLink>
            <NavLink href='/cadastro'>Cadastre-se</NavLink>
            <NavLink href='/entrar'>Entrar</NavLink>

            
        </div>
    )
}

export default NavBar