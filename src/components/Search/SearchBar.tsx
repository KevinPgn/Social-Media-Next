"use client"
import { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const SearchBar = () => {
  const router = useRouter();
  const [inputSearch, setInputSearch] = useState('');

  const search = () => {
    router.push(`/?inputSearch=${inputSearch}`);
  };

  return (
    <>
      <div className='w-[250px] p-2 bg-slate-950 px-5 rounded-md flex items-center gap-3'>
        <input
          type='text'
          placeholder='Search a user, post .....'
          className='w-full p-2 bg-transparent'
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Search size={20} onClick={search} />
      </div>
    </>
  );
};