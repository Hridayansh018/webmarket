import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const SearchBar = () => {

    const {search, setSearch, showSearch, setshowSearch} = useContext(ShopContext)

  return showSearch ? (
    <div className=''>
      
    </div>
  ) : null
}

export default SearchBar
