import React from 'react';
import { PaginationStyle } from '../CSS';


export default function Pagination({page, maxPage, setPage}){

    const [input, setInput] = React.useState(1)

    function handlePrevPage() {
        document.querySelector("input[name='page']").value = null
        if (page > 1) {
            setPage(page-1)
            setInput(page-1)
        }
        
    }
    function handleNextPage() {
        document.querySelector("input[name='page']").value = null
        if (page < maxPage) {
            setPage(page+1)
            setInput(page+1)
        }
    }
    function handleSelectPage(e){
        const {value} = e.target
        if (value > 0 || value < maxPage) {
            setPage(parseInt(value))
            setInput(parseInt(value))
        }
    }

    return (
        <PaginationStyle>
            <button onClick={handlePrevPage} disabled={page === 1? true: false}>◀</button>
            Pagina: <input name='page' type='text' style={{width: "30px"}} placeholder={page} onChange={handleSelectPage}/> de {maxPage}
            <button onClick={handleNextPage} disabled={page === maxPage? true: false}>▶</button>
        </PaginationStyle>
    )
}