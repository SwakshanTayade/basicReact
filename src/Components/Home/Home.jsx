import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Favourite from './Favourite';



const Card = (props) => {

  const { img, handleFavourites } = props;

  return (
    <>
      <div className='card'>
      <img  src={img} alt="movie" />
      <p onClick={handleFavourites}>Add to Favourites</p>
      </div>
    </>
  )
}



const Row = (props) => {

  const { title, topMovies, title2 } = props;
  const [favourites, setFavourites] = useState(localStorage.getItem('netflix-app') ? JSON.parse(localStorage.getItem('netflix-app')):[]);

  const saveLocally = (items)=>{
    localStorage.setItem('netflix-app', JSON.stringify(items));
    
  }


  const addFavourites = (movie) => {
  
    const isAlready = favourites.some((favourite)=>( favourite.imdbID === movie.imdbID))
    if(!isAlready) {

      const newArr = [...favourites, movie]
      setFavourites(newArr);
      saveLocally(newArr)
    }
  }
  
  console.log(favourites);

  return (
    <>
      <div className='row'>
        <h2>{title}</h2>

        <div>
          {topMovies.map((item, index) => (<Card handleFavourites={() => addFavourites(item)} key={index} img={item.Poster} />))}
        </div>

      </div>
        <div>
          <Favourite title = {"Favourite List"} favourites = {favourites} setFavourites = {setFavourites} delete = {"Remove from Favourites"}/>
        </div>

    </>
  )
}

const Home = (props) => {

  const [topMovies, setTopMovies] = useState([]);
  const [bannerImage, setBannerImage] = useState('https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608');
  console.log(props.searchVal);
  const searchQuery = props.searchVal;
  const fetchMovies = async (searchQuery) => {

    try {
      const apiKey = import.meta.env.REACT_APP_OMDB_API_KEY;
      const url = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`
      const response = await axios.get(url)

      if(response.data.Search && response.data.Search>0){
        const banner = response.data.Search[0];
        setBannerImage(banner.Poster);
      }

      console.log(response.data);
      if (response.data.Search)
        setTopMovies(response.data.Search);
    } catch (error) {
      console.error(error);
    }
  }



  useEffect(() => {
    if (searchQuery)
      fetchMovies(searchQuery);
    else {
      const defaultFun = async () => {
        try {
          const apiKey = import.meta.env.REACT_APP_OMDB_API_KEY;
          const defaulturl = `https://www.omdbapi.com/?s=star wars&apikey=${apiKey}`;
          const response = await axios.get(defaulturl);

          setTopMovies(response.data.Search);

        } catch (err) {
          console.log(err);
        }
      }

      defaultFun();


    }


  }, [searchQuery])

  console.log(topMovies);

  return (
    <>
      <section className='home'>
        <div className='banner' style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover"
        }}>
        </div>
        <Row class="row-container" title={"Popular on Netflix"} topMovies={topMovies} />
      </section>

    </>
  )
}

export default Home