import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import Home from './Home'
import {getAllvideogames} from '../redux/actions'
import { LandingStyle } from "../CSS"

export default function Landingpage(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleClick() {
        dispatch(getAllvideogames()).then(() => {
            navigate('./home')
        })
    }
    return (
        <LandingStyle>
                <h1>Henry Videogames</h1>
                <button onClick={handleClick}>Ingresar al Home</button>
        </LandingStyle>
    )
}