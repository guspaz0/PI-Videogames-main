import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { VideogameDetail } from '../redux/actions';
import { CardDetailStyle } from '../CSS';
import { Stars } from '../utils';

export default function CardDetail() {

    const {id} = useParams()
    //const navigate = useNavigate()
    const dispatch = useDispatch()
    const Detail = useSelector(state => state.Videogame_DETAIL)
    //const Videogames = useSelector(state => state.Videogames)

    React.useEffect(() => {
        if (!Detail) {
            dispatch(VideogameDetail(parseInt(id)))
        }
        // if (Detail.id !== parseInt(id)) {
        //     dispatch(VideogameDetail(parseInt(id)))
        // }
    },[dispatch])

    const { name, platforms, description, background_image, released, rating, genres} = Detail

    return (
    <CardDetailStyle>
        {Detail && <div className='Detail'>
            <h1>Game Detail</h1>
            <p>ID: {id}</p>
            <p>{name}</p>
            <img src={background_image} alt='img'/>
            <span>
                <p>Description:</p>
                {description? 
                <p dangerouslySetInnerHTML={{__html: description}}></p>
                : <p>not found</p>}
            </span>

            <ul type='circle' className="platforms">
                <lh>Platforms:</lh>
                {platforms.map((x, index) => {
                return <li key={index}>{x.platform.name}</li>})}
            </ul>
            <span><p>Released:</p> {released}</span>
            <p>Rating: {rating} {Stars[Math.ceil(parseInt(rating))]}</p>
            <ul type='square' className="Genres">
                <lh>Genres:</lh>
                {genres.map((x) => {
                return <li key={x.id}>{x.name}</li>})}
            </ul>
            </div>
        }
    </CardDetailStyle>
    )
}