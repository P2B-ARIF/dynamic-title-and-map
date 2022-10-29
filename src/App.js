import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Order from './components/Order';
import Root from './components/Root';
import Services from './components/Services';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />
        }
        ,
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/order',
          element: <Order />
        },
        {
          path: '/service',
          element: <Services />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
