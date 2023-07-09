import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Card from './Card';
import {getAllvideogames} from '../redux/actions';
import { HomeCards } from './CSS';


export default function Home() {

    const dispatch = useDispatch()

    const Videogames = useSelector(state => state.Videogames)
    const [page, setPage] = React.useState(1);
    const [PerPage, setPerPage] = React.useState(15)
    const [maxPage, setMaxPage] = React.useState(Math.ceil(Videogames.length / PerPage))
    const [input, setInput] = React.useState(1)

    const [Loading, setLoading] = React.useState(false)

    React.useEffect(()=> {
        if (Videogames.length === 0) {
            dispatch(getAllvideogames())
        }
    }, [dispatch])

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

    return (
        <div>
            <h1>Home Videogames PI</h1>
            {maxPage > 0? <><button onClick={handlePrevPage} disabled={page === 0? true: false}>◀</button>
                Pagina: <input name='page' type='text' style={{width: "30px"}} placeholder={page} onChange={handleSelectPage}/> de {maxPage}
                <button onClick={handleNextPage} disabled={page === maxPage? true: false}>▶</button></>
            : null}
            <HomeCards>
                {Videogames.length > 0? Videogames.slice((page-1)*PerPage,PerPage+(page-1)*PerPage).map((e) => {
                    return <Card key={e.id} props={e}/>
                }): null}
            </HomeCards>
        </div>
    )
}