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
            <NavLink to='/create'>
                <button>Create Video Game</button>
            </NavLink>
            <span>
                <input type='search'/><button>Search</button>
            </span>
            <NavLink to='/home'>
                <button>To Home</button>
            </NavLink>
        </NavbarStyle>
    )
}