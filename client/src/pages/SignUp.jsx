import { Link } from "react-router-dom";

export default function SignUp() {
  return  (
  
  <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
      <div className=''>

      <Link  to='/'
        className='  font-bold dark:text-white text-4xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Hijjj
        </span>
        Blog
      </Link>
      <p className="text-sm mt-5">This is a demo project. You can sign up.</p>
        
         </div>

         <div>
          <form>
            <div>
              <Label className="block text-sm font-medium text-gray-700 dark:text-gray-200" />
            </div>

          </form>
         </div>
    </div>
    
    </div>

  )
  
}
