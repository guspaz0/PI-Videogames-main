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

    const Stars = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']

    return (
        <CardDetailStyle>
            <h1>Game Detail</h1>
            <p>ID: {id}</p>
            <p>{name}</p>
            <img src={background_image} alt='img'/>
            <span>
                <p>Description:</p>
                {description? 
                <text dangerouslySetInnerHTML={description}></text>
                : <text>not found</text>}
            </span>

            <ul type='circle' className="platforms">
                <lh>Platforms:</lh>
                {platforms.map((x) => {
                return <li key={x.platform.id}>{x.platform.name}</li>})}
            </ul>
            <span><p>Released:</p> {released}</span>
            <p>Rating: {rating} {Stars[Math.ceil(parseInt(rating))]}</p>
            <ul type='square' className="Genres">
                <lh>Genres:</lh>
                {genres.map((x) => {
                return <li key={x.id}>{x.name}</li>})}
            </ul>

        </CardDetailStyle>
    )
}