import styled from 'styled-components';

export const NavbarStyle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
padding: 15px;
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