import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/agritechproducts/${keyword}`);
    } else {
      navigate('/agritechproducts');
    }
  };

  return (
    <div className='w-full'>
      <form
        onSubmit={handleSubmit}
        className="w-full px-1 sm:px-4 py-1.5 flex justify-between items-center shadow-md bg-white rounded-lg overflow-hidden searchbar"
      >
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="text-sm flex-1 outline-none border-none placeholder-gray-500"
          type="text"
          placeholder="Search product"
        />
        <button type="submit" className="text-white bg-green-500 rounded-full px-2 font-bold">
          Search<SearchIcon/>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
