import styled from 'styled-components';

export const FormStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-size: 15px;
    box-shadow: 2px 2px 5px black;
    text-shadow: 1px 1px 5px white;
    .platforms {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: rgba(119, 86, 122, 1);
        border-radius: 5px;
        .parent_platform {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            background-color: #c47ac0ff;
            border-radius: 5px;
            padding: 5px;
            margin: 5px;
        }
        .platform {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            background-color: #c47ac0ff;
            border-radius: 5px;
            padding: 5px;
            margin: 5px;
            background-color: #debac0ff;
        }

    }
    .genres {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: rgba(119, 86, 122, 1);
        border-radius: 5px;
        .genre {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            background-color: #c47ac0ff;
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
    .rating {
        background-color: #4895ef;
        border-radius: 5px;
        padding: 5px;
    }
    button {
        color: white;
        background-color: black;
        border-radius: 5px;
        font-size: 15px;
        box-shadow: 2px 2px 5px black;
        text-shadow: 1px 1px 5px gray;
        font-size: 20px;
    }
    button:hover {
        color: black;
        background-color: white;
    }
    label {
        font-weight: bold;
        padding: 5px;
    }
`