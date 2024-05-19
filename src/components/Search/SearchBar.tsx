import {Search} from 'lucide-react';

export const SearchBar = () => {
  return <>
    <div className='w-[250px] p-2 bg-slate-950 px-5 rounded-md flex items-center gap-3'>
      <input type='text' placeholder='Search a user, post .....' className='w-full p-2 bg-transparent' />
      <Search size={20}/>
    </div>
  </>
}