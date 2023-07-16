import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
    findVideogames,
    } from '../redux/actions';
import { NavbarStyle } from './CSS';


export default function Navbar() {

    const dispatch = useDispatch()
    const location = useLocation()

    return (
        <NavbarStyle>
            {location.pathname === '/create' &&
                <NavLink to='/home'>
                    <button>To Home</button>
                </NavLink>
            }
            {location.pathname === '/home' && 
            <>
                <NavLink to='/create'>
                <button>Create Video Game</button>
                </NavLink>
                <span>
                    <input type='search'/><button>Search</button>
                </span>
                <NavLink to='/about'>
                    <button>About</button>
                </NavLink>
            </>
            }
            {location.pathname.includes('/detail/') &&
                <NavLink to='/home'>
                    <button>To Home</button>
                </NavLink>
            }

        </NavbarStyle>
    )
}