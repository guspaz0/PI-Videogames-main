import styled from 'styled-components';

export const HomeCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 5px;
    padding: 5px;
    font-size: 20px;
`
export const PaginationStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    button {
        color: white;
        background-color: black;
        border-radius: 5px;
        font-size: 15px;
        box-shadow: 2px 2px 5px black;
        text-shadow: 1px 1px 5px gray;
    }
    button:hover {
        color: black;
        background-color: white;
    }
`