import styled from "styled-components";


export const Container = styled.body`
    background: #6b8e23;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    width: 30rem;
    height: 20rem;
    
    

    img {
        width: 20vh;
        height: 20vh;
        border-radius: 10rem ;
    }

    ul {
        li {
            h1{
                font-family: Arial, Helvetica, sans-serif;
                font-size: 20px;
                color: #ccff33 ;
            }

            color: white;
            list-style: none;
        }
    }
`;
