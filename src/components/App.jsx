import React, { useState, useEffect } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import Home from './Home'
import User from './User'
import Recipe from './Recipe'
import Navbar from './Navbar'
import Search from './Search'

import Footer from './Footer'
import NewRecipe from './NewRecipe'
import EditRecipe from './EditRecipe'
import RecipeContext from '../context'


export default function App() {
  // stores all recipes
  const [recipeList, setRecipeList] = useState([])
  
  useEffect(() => {
    async function getRecipeList() {
      const res = await fetch('https://server-production-6a0e.up.railway.app/recipes/')
      const data = await res.json()
      setRecipeList(data) 
    }
    getRecipeList()
  }, [])
  
  //Search input state  
  const [searchInput, setSearchInput] = useState("")

  //user state
  const [loggedInUser, setLoggedInUser] = useState("WhiskWizard")

  useEffect (() => {
    async function getUser() {
      const res = await fetch('https://server-production-6a0e.up.railway.app/users/WhiskWizard')
      const data = await res.json()
      setLoggedInUser(data)
    }
    getUser()
    },[])

  return (
    <>
    <RecipeContext.Provider value={{ recipeList, setRecipeList, loggedInUser, setLoggedInUser }}>
      <Navbar setSearchInput={setSearchInput} />
      <Routes>
        <Route path='/' element={<Home setSearchInput={setSearchInput} />} />
        <Route path='/search' element={<Search searchInput={searchInput} setSearchInput={setSearchInput} />} />
        <Route path='/user' element={<User />} />
        <Route path='/recipe/:recipeId' element={<Recipe />} />

        <Route path='/recipe/add' element={<NewRecipe />} />
        <Route path='/recipe/:recipeId/edit' element={<EditRecipe />} />

        <Route path='*' element={<div className='mh-100 d-flex justify-content-center align-items-center m-5 p-5' style={{height: "80vh"}}><h3>Page not found!</h3></div>} />
      </Routes>
      <Footer />
    </RecipeContext.Provider>
    </>
  )
}