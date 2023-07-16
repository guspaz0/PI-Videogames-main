import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Card from './Card';
import {getAllvideogames, orderVideogames, filterVideogames} from '../redux/actions';
import { HomeCards, PaginationStyle } from './CSS';
import Load


export default function Home() {

    const dispatch = useDispatch()

    const Videogames = useSelector(state => state.Videogames)
    const [page, setPage] = React.useState(1);
    const [PerPage, setPerPage] = React.useState(15)
    const [maxPage, setMaxPage] = React.useState(Math.ceil(Videogames.length / PerPage))
    const [input, setInput] = React.useState(1)

    const [Loading, setLoading] = React.useState(true)

    React.useEffect(()=> {
        dispatch(getAllvideogames())
    }, [dispatch])

    React.useEffect(()=> {
        if (Videogames.length === 0) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    },[Videogames])

    function handlePrevPage() {
        document.querySelector("input[name='page']").value = null
        if (page > 1) {
            setPage(page-1)
        }
    }
    function handleNextPage() {
        document.querySelector("input[name='page']").value = null
        if (page < maxPage) {
            setPage(page+1)
        }
    }

    function handleSelectPage(e){
        const {value} = e.target
        if (value > 0 || value < maxPage) {
            setPage(parseInt(value))
        }
    }
    function handleOrder(e){
        e.preventDefault();
        const {name,value} = e.target;
        console.log(name, value)
        dispatch(orderVideogames(value))
    }
    function handleFilter(e) {

    }

    return (
        <div>
            <span>
                Order: 
                <select name='order' onChange={handleOrder}>
                    <option value='default'>default</option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                    <option value='Max Rating'>Max Rating</option>
                    <option value='Min Rating'>Min Rating</option>
                </select>
            </span>
            {maxPage > 0? 
                <PaginationStyle>
                    <button onClick={handlePrevPage} disabled={page === 1? true: false}>◀</button>
                    Pagina: <input name='page' type='text' style={{width: "30px"}} placeholder={page} onChange={handleSelectPage}/> de {maxPage}
                    <button onClick={handleNextPage} disabled={page === maxPage? true: false}>▶</button>
                </PaginationStyle>
            : null}
            <HomeCards>
                {Videogames.length > 0? Videogames.slice((page-1)*PerPage,PerPage+(page-1)*PerPage).map((e) => {
                    return <Card key={e.id} props={e}/>
                }): null}
            </HomeCards>
        </div>
    )
}