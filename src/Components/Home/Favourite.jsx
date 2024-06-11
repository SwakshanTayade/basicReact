import React, { useState } from 'react'

const Favourite = (props) => {

    const {favourites, setFavourites} = props;

    
    const saveLocally = (items)=>{
        localStorage.setItem('netflix-app', JSON.stringify(items));
    }

    const deleteCard = (movie) => {
        const updatedfavourites = favourites.filter((fav) => fav.imdbID !== movie.imdbID)

        setFavourites(updatedfavourites)
        saveLocally(updatedfavourites)

    }


    return (
        <div className='row'>
            <h2>{props.title}</h2>

            <div>
                {favourites.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src={item.Poster} alt="Favourites" />
                            <p onClick={() => deleteCard(item)}>{props.delete}</p>
                        </div>
                        
                    )
                })}

            </div>
        </div>
    )
}

export default Favourite