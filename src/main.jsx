import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { TransitionProvider } from './components/TransitionContext';
import App from './App';
import Hero2 from './hero/hero2/Hero2';
import Hero3 from './hero/hero3/Hero3.jsx';
import Hero4 from './hero/hero4/Hero4.jsx';
import MultiStepForm from './Registration/MultiStepForm.jsx';
import SuccessRoute from './Registration/SuccessRoute.jsx';
import NotFound from './NotFound.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import './index.css';

// Keeps TransitionProvider mounted across all routes
function RootLayout() {
  return (
    <>
      <TransitionProvider>
        <Outlet />
      </TransitionProvider>
      <MusicPlayer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/hero-two',
        element: <Hero2 />,
      },
      {
        path: '/hero-three',
        element: <Hero3 />,
      },
      {
        path: '/hero-four',
        element: <Hero4 />,
      },
      {
        path: '/register',
        element: <MultiStepForm />,
      },
      {
        path: '/success',
        element: <SuccessRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);