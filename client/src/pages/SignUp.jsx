import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {

  const [formData, setFormData]= useState({});
  const [errorMessage, setErrorMessage]= useState(null);
  const [loading, setLoading]= useState(false);

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
    };
  
  const handleSubmit= async(e)=>{
      e.preventDefault();

      if(!formData.username || !formData.email || !formData.password){
        return setErrorMessage('please fill out all fields');
      }
      try {
        const res = await fetch('/api/auth/sign-up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data);
            } catch (error) {
              console.error(error);
              }
              };





   

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
              <Label value="your username" className="block text-sm font-medium text-gray-700 dark:text-gray-200" onSubmit={handleSubmit} />
              <TextInput type="text" placeholder="Username" id="username" onChange={handleChange}/>
            </div>

            <div>
              <Label value="your email" className="block text-sm font-medium text-gray-700 dark:text-gray-200" />
              <TextInput type="email" placeholder="nameblog@gmail.com" id="email" onChange={handleChange}/>
            </div>

            <div>
              <Label value="your password" className="block text-sm font-medium text-gray-700 dark:text-gray-200" />
              <TextInput type="password" placeholder="Password" id="password" onChange={handleChange}/>
            </div>
            <Button className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white" type="submit">
              Sign Up
            </Button>

          </form>

          <div>
            <span className="flex gap-2 text-sm mt-5">
              Have an account?
            </span>
            <Link to='/sign-in' className="text-blue-500">
            Sign In
            </Link>
          </div>

          {
            errorMessage && (
              <Alert className="mt-5" color='failure'>
                {errorMessage}

              </Alert>
            )

          }
         </div>
    </div>
    
    </div>

  )
  
}
