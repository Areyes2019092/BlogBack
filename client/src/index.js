import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Authors from './pages/Authors';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import CategoryPost from './pages/CategoryPost';
import AuthorPost from './pages/AuthorPost';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';


import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
        { index: true, element: <Home/> },
        { path: "posts/:id", element: <PostDetail/> },
        { path: "register", element: <Register/> },
        { path: "login", element: <Login/> },
        { path: "profile/:id", element: <UserProfile/> },
        { path: "authors", element: <Authors/> },
        { path: "create", element: <CreatePost/> },
        { path: "posts/:id/edit", element: <EditPost/> },
        { path: "posts/categories/:category", element: <CategoryPost/> },
        { path: "posts/users/:id", element: <AuthorPost/> },
        { path: "myposts/:id", element: <Dashboard/> },
        { path: "logout", element: <Logout/> },


    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);