import styled from 'styled-components';
//import videogame from '../../assets/video-games.jpeg'

export const LandingStyle = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    //background-color: gray;
    padding: 5px;
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