import { Button, Navbar, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const path = useLocation().pathname;
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Navbar className='border-b-2 bg-white dark:bg-gray-800'>
      <div className="flex items-center justify-between w-full">
        <Link
          to='/'
          className='text-sm sm:text-xl font-semibold dark:text-white'
        >
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Hijjj
          </span>
          Blog
        </Link>

        {/* Arama Çubuğu - Sadece büyük ekranlarda görünür */}
        <form className='hidden lg:flex'>
          <TextInput
            type='text'
            placeholder='Search...'
            icon={AiOutlineSearch}
            className='w-64'
          />
        </form>

        {/* Tema Değiştirici ve Sign In Butonu */}
        <div className='flex items-center gap-4'>
          {/* Tema geçiş butonu */}
          <Button className='hidden sm:flex w-10 h-10' color='gray' pill onClick={toggleTheme}>
            {theme === 'light' ? <FaSun className='text-yellow-500' /> : <FaMoon className='text-gray-700 dark:text-gray-200' />}
          </Button>

          {/* Sign In Butonu */}
          <Link to='/sign-in'>
            <Button className='px-3 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Sign In
            </Button>
          </Link>

          {/* Arama butonu - Küçük ekranlar için */}
          <Button className='w-10 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch />
          </Button>
        </div>
      </div>

      {/* Navbar Toggle (Mobil menü) */}
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
