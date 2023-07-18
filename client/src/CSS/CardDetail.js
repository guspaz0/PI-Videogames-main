import styled from 'styled-components';

export const CardDetailStyle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

    .Detail{
        background-color: rgba(47, 60, 255, 0.8);
        box-shadow: 2px 2px 5px black;
        text-shadow: 1px 1px 5px white;
        border-radius: 5px;
        font-size: 15px;
        padding: 5px;
    }
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