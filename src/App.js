import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';

import Home from './Pages/Home/Home';
import Contacts from './Pages/Contact/Contacts';

function App() {


  
  const router = createBrowserRouter([{
    path: "/",
    element: <Home />,},
    {
      path: "/contacts",
      element: <Contacts />,
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
