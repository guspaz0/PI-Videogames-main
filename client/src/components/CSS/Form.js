import styled from 'styled-components';

export const FormStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    .platforms {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .platform {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            background-color: blueviolet;
            border-radius: 5px;
            padding: 5px;
            margin: 5px;
        }
    }
    img {
        width: 200px;
        border-radius: 5px;
        border-color: black;
        border-style: solid;
        border-width: 2px;
    }
`