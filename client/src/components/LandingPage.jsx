import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import Home from './Home'
import {getAllvideogames, getGenres, getPlatforms} from '../redux/actions'
import { LandingStyle } from "../CSS"

export default function Landingpage(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleClick() { 
        dispatch(getGenres())
        dispatch(getPlatforms())
        dispatch(getAllvideogames()).then(() => {
            navigate('./home')
        })
    }
    return (
        <LandingStyle>
            <div className="Landing">
                <h1>Henry Videogames</h1>
                <button onClick={handleClick}>Ingresar al Home</button>
            </div>
        </LandingStyle>
    )
}