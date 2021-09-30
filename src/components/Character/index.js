import React from "react";

const Character = ({character}) => {
    const {name, species, image,  location} = character

    return(
        <div className="containerCard">
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <li>{species}</li>
            <li>{location.name}</li>
        </div>
    )
}
export default Character;