import React, { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext'; // Adjust the path as needed
import Loggedin from './loggedin';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext); // Access setUser from context

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, email, password });
    
    // Clear the input fields after setting the user
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
     <Loggedin/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-pink-300"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-pink-300"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-pink-300"
            placeholder="Your Password"
          />
        </div>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
        >
          Continue
        </button>

        <p className="mt-4 text-center">
          Already have an account?{' '}
          <button type="button" className='text-pink-500 font-semibold hover:text-pink-700'>
            Login here
          </button>
        </p>

        <div className="flex items-center mt-4">
          <input
            type='checkbox'
            className="mr-2"
            required
          />
          <span className='text-sm'>
            By continuing, I agree to the terms of use & privacy policy
          </span>
        </div>
      </form>
    
    </div>
   
    </>
  );
};

export default SignupForm;






