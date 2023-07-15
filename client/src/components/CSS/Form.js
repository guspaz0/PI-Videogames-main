import styled from 'styled-components';

export const FormStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
`