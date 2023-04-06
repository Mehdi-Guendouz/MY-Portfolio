import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';

import Home from './Pages/Home/Home';
import Contacts from './Pages/Contact/Contacts';
import AllProjects from './Pages/AllProjects/AllProjects';
import AboutPage from './Pages/About/AboutPage';

function App() {


  
  const router = createBrowserRouter([{
    path: "/",
    element: <Home/>,},
    {
      path: "/contacts",
      element: <Contacts path={"contacts"} />,
    },
    {
      path: "/projects",
      element: <AllProjects path={"projects"} />,
    },
    {
      path: "/about",
      element: <AboutPage path={"about"} />,
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
