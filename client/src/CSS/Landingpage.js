import styled from 'styled-components';
//import videogame from '../../assets/video-games.jpeg'

export const LandingStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-align: center;
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
    .Landing {
        //position: relative;
        width: 70%;
        min-height: 500px;
        background-image: url('https://cdn.borntoengineer.com/2017/10/video-games.jpeg');
        background-size: 100%;
        background-repeat: no-repeat;
    }

`