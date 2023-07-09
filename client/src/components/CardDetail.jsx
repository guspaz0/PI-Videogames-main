import React from 'react';
import { useSelector, useDispatch, createSelectorHook } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { VideogameDetail } from '../redux/actions'

export default function CardDetail() {

    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const dispatchedDetail = useSelector(state => state.Videogame_DETAIL)
    const Videogames = useSelector(state => state.Videogames)
    const DetailFromState = Videogames.filter((e) => e.id === Number(id))[0]

    const { name, platforms, background_image, released, rating, genres} = DetailFromState
    // React.useEffect(() => {
    //     if (VideogameDetail.length === 0) {
    //         dispatch(VideogameDetail(id))
    //     }
    // },[dispatch])
    // if (VideogameDetail.length === 0) {
    //     VideogameDetail = dispatchedDetail
    // }
    window.addEventListener('popstate', () => {
        navigate('/home');
    });

    return (
        <div>
            <h1>Card Detail Component</h1>
            <span>
                <p>ID: {id}</p>
                <p>NAME: {name}</p>
                <img src={background_image} alt='img'/>
                
            </span>
            <span className="platforms">
                Platforms:
                <ul>{platforms.map((x) => {
                    return <li key={x.platform.id}>{x.platform.name}</li>})}
                </ul>
            </span>
            <span>
                <p>Released: {released}</p>
                <p>Rating: {rating}</p>
            </span>
            <span className="Genres">
                Genres:
                <ul>{genres.map((x) => {
                    return <li key={x.id}>{x.name}</li>})}
                </ul>
            </span>
        </div>
    )
}