import styled from 'styled-components'

export const AboutStyle = styled.div`
    .about {
        padding: 5px;
        margin: 5px;
        background-color: rgba(255,255,0,0.9);
        width: auto;
        border-radius: 5px;
        .aptitudes {
            position: relative;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;
            border-radius: 5px;
        }
        .imgtext {
            display: flex;
            flex-direction: column;
        }
    }

    .aboutMe {
        margin: 5px;
        border-style: solid;
        border-width: 2px;
        border-radius: 5px;
    }
    /* .aboutApp {
        border-style: solid;
        border-radius: 5px;
    } */

    img {
        width: 100px;
    }
`