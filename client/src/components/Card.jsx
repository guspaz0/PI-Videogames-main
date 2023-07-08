
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VideogameDetail } from "../redux/actions";


export default function Card(props){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = async () =>{
        dispatch(VideogameDetail(props.id))
        .then(() =>{
            navigate(`/detail/${props.id}`,{replace: true})
        })
    }


    return(
            <div className="card" onClick={handleClick} key={props.id}>
                <img src={props.background_image} alt='img'/>

                <h3>{props.name}</h3>
                <span>
                Platforms:
                <ul>{props.platforms.map((e) => {
                    return <li key={e}>{e.platform.name}</li>})}
                </ul>
                </span>
                <span>
                    <p>{props.released}</p>
                    <p>{props.rating}</p>
                </span>
                <span>
                Genres:
                <ul>{props.genres.map((e) => {
                    return <li key={e}>{e.name}</li>})}
                </ul>
                </span>
            </div>
    )
}