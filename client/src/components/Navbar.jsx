import React from 'react';
import { NavLink,useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
    findVideogames,
    } from '../redux/actions';
export default function Navbar() {

    const dispatch = useDispatch()
    const location = useLocation()

    return (
        <div>
            <h1>Navbar</h1>
        </div>
    )
}