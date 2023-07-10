
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VideogameDetail } from "../redux/actions";
import { VideoGameCard } from "./CSS";


export default function Card(e){

    const {id, name, platforms, background_image, released, rating, genres} = e.props

    const dispatch = useDispatch()
    const navigate = useNavigate()

    React.useEffect(() =>{
        
    },[navigate])

    const handleClick = async () => {
        navigate(`/detail/${id}`,{replace: true})
    }

    return(
        <VideoGameCard onClick={handleClick} key={id}>
            <div className="Card">
                <img src={background_image} alt='img'/>
                <h3>{name}</h3>
                <span>
                Genres:
                <ul className="genres">{genres.map((x) => {
                    return <li key={x.id}>{x.name}</li>})}
                </ul>
                </span>
            </div>
        </VideoGameCard>
    )
}