import { Button, Navbar, TextInput } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2 bg-white dark:bg-gray-800 px-4 py-2 shadow-md flex justify-between items-center'>
      <div className='flex items-center space-x-4 lg:space-x-6'>
        <Link
          to='/'
          className='flex items-center space-x-2 text-lg sm:text-2xl font-bold dark:text-white'
        >
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Hijjj
          </span>
          <span className='text-gray-700 dark:text-gray-300'>Blog</span>
        </Link>
      </div>

      <form className='relative hidden lg:inline'>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='w-80 pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500'
        />
        <AiOutlineSearch className='absolute left-3 top-2.5 text-gray-500 dark:text-gray-400' />
      </form>

      <div className='flex items-center space-x-4 lg:space-x-6'>
        <Navbar.Collapse className='flex space-x-4 lg:space-x-6'>
          <Navbar.Link active={path === '/'} as={'div'}>
            <Link to='/' className={`hover:text-indigo-500 dark:hover:text-indigo-400 ${path === '/' ? 'text-indigo-500 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`}>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/about'} as={'div'}>
            <Link to='/about' className={`hover:text-indigo-500 dark:hover:text-indigo-400 ${path === '/about' ? 'text-indigo-500 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`}>About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/projects'} as={'div'}>
            <Link to='/projects' className={`hover:text-indigo-500 dark:hover:text-indigo-400 ${path === '/projects' ? 'text-indigo-500 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`}>Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>

        {/* Tema değiştirme butonu (dark mode toggle) */}
        <Button className='bg-gray-300 dark:bg-gray-700 p-2 rounded-full'>
          {/* Temayı değiştirme ikonunu buraya ekleyebilirsiniz */}
          🌓
        </Button>

        {/* Sign In butonu */}
        <Link to='/sign-in'>
          <Button className='px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white hover:bg-indigo-600'>
            Sign In
          </Button>
        </Link>
      </div>
    </Navbar>
  );
}
