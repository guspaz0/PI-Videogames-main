import React from 'react';
import {useSelector} from 'react-redux';
import {Card} from './Card';

export default function Home() {

    const Videogames = useSelector(state = state.Videogames)
    const [page, setPage] = React.useState(0);
    const [PerPage, setPerPage] = React.useState(15)
    const [maxPage, setMaxPage] = React.useState(Math.ceil(Videogames.length / cardPerPpage))

    const [Loading, setLoading] = React.useState(false)

    return (
        <div>
            <h1>Home Videogames PI</h1>
            {Videogames.length > 0? Videogames.slice((page-1)*PerPage,PerPage+(page-1)*PerPage): null}
        </div>
    )
}