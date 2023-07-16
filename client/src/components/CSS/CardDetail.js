import styled from 'styled-components';

export const CardDetailStyle = styled.div`
    position: absolute;
    left: 33%;
    display: block;
    block-size: auto;
    text-align: center;
    width: auto;
    //flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(47, 60, 255, 0.8);
    padding: 15px;
    margin: 5px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px black;
    text-shadow: 1px 1px 5px white;
    font-size: 20px;
    p{
        font-weight: bold;
    }
    img {
        height: 300px;
        border-radius: 5px;
    };

    lh {
        font-weight: bold;
    };
`