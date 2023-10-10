import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Users from './pages/Users.tsx'
import Products from './pages/Products.tsx'
import UserDetails from './pages/UserDetails.tsx'
import UserToDos from './pages/UserToDos.tsx'
import ToDoDetails from './pages/ToDoDetails.tsx'
import MainPage from './pages/MainPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/users/:id/todos/:todoId' element={<ToDoDetails/>}/>
        <Route path='/users/:id/todos' element={<UserToDos/>}/>
        <Route path='/users/:id' element={<UserDetails/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/' element={<MainPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
