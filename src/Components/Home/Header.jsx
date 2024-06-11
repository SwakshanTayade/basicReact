import React, { useState } from 'react'
import logo from '../../../logo.svg'
import {Link} from 'react-router-dom'
import { RiSearchLine } from "react-icons/ri";
import Search from './Search';
const Header = (props) => {

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  

  const toggleSearch = ()=>{
    setIsSearchVisible(prevState => !prevState)
  }

  return (
    <div className='navbar'>
            <img src={logo} alt="" />
            <div>

                <Link to="/tvshows"> TV Shows</Link>
                <Link to="/movies"> Movies</Link>
                <Link to="/recentlyadded"> Recently Added</Link>
                <Link to="/mylist"> My List</Link>
            </div>

            <span className="searchContainer">
                <RiSearchLine onClick={toggleSearch}/>
                
                {isSearchVisible && <Search searchVal={props.searchVal} setSearchVal={props.setSearchVal}/>}
            </span>
        </div>
  )
}

export default Header