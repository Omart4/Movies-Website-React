import './App.css'
import { useState } from 'react'
import {createRoutesFromElements,createBrowserRouter,createHashRouter,Route,RouterProvider} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { RootLayout } from './Layouts/RootLayout'
import { Home } from './Pages/Home'
import { Movies } from './Pages/Movies'
import { MovieDetails } from './Pages/MovieDetails'
import { mediaDetailsLoader } from './Pages/MovieDetails'
import { showDetailsLoader } from './Pages/ShowDetails'
import Shows from './Pages/Shows'
import ShowDetails from './Pages/ShowDetails'
import ShowSeason from './Pages/ShowSeason'

export const API_KEY:string = '0b338d8560dffa32035a5a08fa0a2dcd'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='movies' element={<Movies/>}/>
      <Route path='/movies/:id' element={<MovieDetails/>} loader={mediaDetailsLoader}/>
      <Route path='shows' element={<Shows/>}/>
      <Route path='/shows/:id' element={<ShowDetails/>} loader={showDetailsLoader}/>
      <Route path='/shows/:id/season' element={<ShowSeason/>}/>
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
