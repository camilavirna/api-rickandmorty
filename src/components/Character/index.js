import React from "react";

import { Container } from './styled'

const Character = ({character}) => {
    const {id, name, species, image,  location} = character

    return(
        <Container>
            <img src={image} alt={name}/>
            <ul>
            <li><h1>{id}. {name}</h1></li>
            <li>{species}</li>
            <li>{location.name}</li>
            </ul>
        </Container>
    )
}
export default Character;