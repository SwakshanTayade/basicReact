import React from 'react'

const Search = (props) => {
  return (
    <>
        <input type="text" placeholder='Search'
        value={props.searchVal}
        onChange={(e)=>props.setSearchVal(e.target.value)}
        />
    </>
  )
}

export default Search