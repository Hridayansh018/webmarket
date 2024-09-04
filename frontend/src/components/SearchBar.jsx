import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const SearchBar = () => {
  const { search, setSearch, showSearch, setshowSearch } = useContext(ShopContext);

  return showSearch ? (
    <div className={`border-t border-b bg-gray-50 text-center mt-12 ${showSearch ? 'block' : 'hidden'}`}>
      <div className="inline-flex items-center border border-gray-300 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:1/2">
        {/* <input 
          type="text" 
          placeholder='Search' 
          className='outline-none bg-transparent w-full' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          onBlur={() => setshowSearch(false)}
        /> */}
      </div>
    </div>
  ) : null;
}

export default SearchBar;
