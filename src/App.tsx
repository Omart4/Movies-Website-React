import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { RootLayout } from './Layouts/RootLayout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {createRoutesFromElements,createBrowserRouter,createHashRouter,Route,RouterProvider} from 'react-router-dom'
import { Home } from './Pages/Home'
import { Movies } from './Pages/Movies'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='movies' element={<Movies/>}/>
    </Route>
  )
)

function App() {
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
library.add(fab, fas, far)
