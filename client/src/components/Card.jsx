
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VideogameDetail } from "../redux/actions";
import styled from 'styled-components';
//import CardDetail from "./CardDetail";
//import Cardcss from './Card.css?inline';

const VideoGameCard = styled.div`
    .Card{
        border-radius: 5px;
    background-color: rgba(47, 0, 255, 0.8);
    padding: 5px 5px 5px;
    margin: 5px;
    gap: 10px;
    box-shadow: 2px 2px 5px yellow;
    text-shadow: 1px 1px 5px gray;
    }
    .Card:hover {
        background-color: rgba(47, 0, 255, 0.9);
    }

    .genres {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    }
    img {
        height: 200px;
        width: 250px;
        border-radius: 5px;
    }

`


export default function Card(e){

    const {id, name, platforms, background_image, released, rating, genres} = e.props

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = async () => {
        navigate(`/detail/${id}`,{replace: true})
    }
    

    return(
        <VideoGameCard  >
            <div className="Card" onClick={handleClick} key={id}>
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