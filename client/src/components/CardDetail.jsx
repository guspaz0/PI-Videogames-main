import React from 'react';
import { useSelector, useDispatch, createSelectorHook } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { VideogameDetail } from '../redux/actions';
import { CardDetailStyle } from './CSS';

export default function CardDetail() {

    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const dispatchedDetail = useSelector(state => state.Videogame_DETAIL)
    const Videogames = useSelector(state => state.Videogames)
    const DetailFromState = Videogames.filter((e) => e.id === Number(id))[0]

    const { name, platforms, description, background_image, released, rating, genres} = DetailFromState
    // React.useEffect(() => {
    //     if (VideogameDetail.length === 0) {
    //         dispatch(VideogameDetail(id))
    //     }
    // },[dispatch])
    // if (VideogameDetail.length === 0) {
    //     VideogameDetail = dispatchedDetail
    // }

    // window.addEventListener('popstate', () => {
    //     navigate('/home');
    // });

    return (
        <CardDetailStyle>
            <h1>Game Detail</h1>
            <h4>ID: {id}</h4>
            <h2>{name}</h2>
            <img src={background_image} alt='img'/>
            <span>
                <h4>Description:</h4>
                {description? 
                <p dangerouslySetInnerHTML={description}></p>
                : <p>not found</p>}
            </span>
            <span>
                <h4>Platforms:</h4>
                <ul className="platforms">{platforms.map((x) => {
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
        </CardDetailStyle>
    )
}