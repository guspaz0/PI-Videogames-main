import styled from 'styled-components';

export const VideoGameCard = styled.div`
    position: relative;
    .Card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: rgba(47, 0, 255, 0.8);
        padding: 5px 5px 5px;
        margin: 5px;
        gap: 10px;
        box-shadow: 2px 2px 5px black;
        text-shadow: 1px 1px 5px gray;
    }
    .Card:hover {
        background-color: rgba(47, 0, 255, 0.9);
    }

    .genres {
        display: grid;
        justify-content: space-around;
        align-items: center;
        grid-template-columns: repeat(2, 100px);
        gap: 10px;

    }
    img {
        height: 200px;
        width: 250px;
        border-radius: 5px;
    }
`