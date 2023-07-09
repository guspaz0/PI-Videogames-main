import styled from 'styled-components';

export const HomeCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 5px;
    background-color: gray;
    padding: 5px;

    .card {
        background-color: blueviolet;
        padding: 5px;
        .platforms {
        display: flex;
        flex-direction: row;
        
        }
    }
    img {
        height: 200px;
        width: 250px;
        }
`