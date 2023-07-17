import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
    findVideogames, orderVideogames
    } from '../redux/actions';
import { NavbarStyle } from '../CSS';


export default function Navbar() {

    const dispatch = useDispatch()
    const location = useLocation()
    const Order = useSelector(state => state.order)

    React.useEffect(() => {

    },[dispatch])

    function handleSearch(e) {
        e.preventDefault()
        const input = document.querySelector('input[name=searchVideogame]')
        dispatch(findVideogames(input.value))
        .then(() => {
            dispatch(orderVideogames(Order))
        })
        input.value = null
        
    }


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
                    <input type='search' name='searchVideogame'/><button onClick={handleSearch}>Search</button>
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