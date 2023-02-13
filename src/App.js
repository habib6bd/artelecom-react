import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/', element: <Home></Home>,
        },
        {
          path: '/contact', element: <Contact></Contact>
        }
      ]
    }
  ])

  return (
    <div>

   
    {/* <div className="bg-white py-12">
      <div className="container mx-auto">
        <h1 className="text-5xl text-center font-bold mb-6">Welcome to Our ISP</h1>
        <p className="text-xl text-center mb-12">We offer the fastest and most reliable internet services in town.</p>
        <div className="flex justify-center">
          <div className="w-1/3 p-6 bg-gray-200 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Basic Plan</h2>
            <p className="mb-4">50 Mbps download speed</p>
            <p className="mb-4">20 Mbps upload speed</p>
            <p className="mb-4">Unlimited data</p>
            <p className="mb-4">$50/month</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Sign Up</button>
          </div>
          <div className="w-1/3 p-6 bg-gray-200 rounded-lg ml-12">
            <h2 className="text-lg font-bold mb-4">Pro Plan</h2>
            <p className="mb-4">100 Mbps download speed</p>
            <p className="mb-4">50 Mbps upload speed</p>
            <p className="mb-4">Unlimited data</p>
            <p className="mb-4">$80/month</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Sign Up</button>
          </div>
        </div>
      </div>
    </div> */}
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
