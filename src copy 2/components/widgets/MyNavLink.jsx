import React from 'react'
import { Link, useLocation } from 'react-router-dom';


export default function MyNavLink({ to, children }) {
    return (
        <Link to={to} className='text-mainColor bg-mainColor20 text-center rounded uppercase px-3 py-2'>{children}</Link>
    )
}
