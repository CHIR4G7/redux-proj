import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeItems from './Components/HomeItems.jsx';
import Navbar from './Components/Navbar.jsx';
import Bag from './Components/Bag.jsx';
import Home from './routes/Home.jsx';

//redux
import { Provider } from 'react-redux';
import store from './store/store.js';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/bag',
        element: <Bag />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>,
)
