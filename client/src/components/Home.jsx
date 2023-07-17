import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Card from './Card';
import Pagination from './Pagination';
import {getAllvideogames, orderVideogames, filterVideogames, getGenres} from '../redux/actions';
import { HomeCards, Order_FilterStyle } from '../CSS';
import Load from '../assets/Loading.gif'

export default function Home() {

    const dispatch = useDispatch()

    const Videogames = useSelector(state => state.Videogames)
    const Order = useSelector(state => state.order)
    const Filter = useSelector(state => state.filter)
    const Genres = useSelector(state => state.Genres)
    const [page, setPage] = React.useState(1);
    const [perPage, setPerPage] = React.useState(15)
    const maxPage = Math.ceil(Videogames.length / perPage)
    const [Loading, setLoading] = React.useState(true)

    // React.useEffect(()=> {
    //     dispatch(getAllvideogames())
    // }, [dispatch])

    React.useEffect(()=> {
        dispatch(getAllvideogames())
        dispatch(getGenres())
    },[dispatch])
    
    React.useEffect(()=> {
        if (Videogames.length === 0) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    },[Videogames])

    function handleOrder(e){
        e.preventDefault();
        const select = document.querySelector('select[name=order]').value
        dispatch(orderVideogames(select))
    }
    function handleFilter(e) {
        e.preventDefault();
        const select = document.querySelector('select[name=filter]').value
        dispatch(filterVideogames(select))
    }

    return (
        <div>
            <Order_FilterStyle>
                Order By: 
                <select name='order' value={Order} onChange={handleOrder}>
                    <option value='default'>default</option>
                    <option value='reset'>reset</option>
                    <option value='A-Z'>Name A~Z</option>
                    <option value='Z-A'>Name Z~A</option>
                    <option value='Max Rating'>Max Rating</option>
                    <option value='Min Rating'>Min Rating</option>
                </select>
                Filter By:
                <select name='filter' value={Filter} onChange={handleFilter}>
                    <option value='default'>default</option>
                    <option value='reset'>reset</option>
                    <option value='Origin DB'>Origin DB</option>
                    <option value='Origin API'>Origin API</option>
                    {Genres.map((e) => {return <option key={e.id} value={e.name}>{e.name}</option>})}
                </select>{Filter}
            </Order_FilterStyle>
            <Pagination page={page} maxPage={maxPage} setPage={setPage}/>
            {Loading && <img src={Load} alt='load'/>}
            <HomeCards>
                {Videogames && Videogames.slice((page-1)*perPage,perPage+(page-1)*perPage).map((e) => {
                    return <Card key={e.id} props={e}/>
                })}
            </HomeCards>
        </div>
    )
}