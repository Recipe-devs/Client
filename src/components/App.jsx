import React, { useState, useEffect } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import Home from './Home'
import User from './User'
import Recipe from './Recipe'
import Navbar from './Navbar'
import Search from './Search'
import ApiTest from './ApiTest'
import Footer from './Footer'
import NewRecipe from './NewRecipe'
import EditRecipe from './EditRecipe'
import AverageRatings from './AverageRatings'

export default function App() {
  // stores all recipes
  const [recipeList, setRecipeList] = useState([])
  
  useEffect(() => {
    async function getRecipeList() {
      const res = await fetch(`https://server-production-6a0e.up.railway.app/recipes/`)
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
    <Navbar loggedInUser={loggedInUser} setSearchInput={setSearchInput} />
    <Routes>
      <Route path='/' element={<Home setSearchInput={setSearchInput} recipeList={recipeList} />} />
      <Route path='/search' element={<Search searchInput={searchInput} setSearchInput={setSearchInput} recipeList={recipeList}/>} />
      <Route path='/user' element={<User loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} recipeList={recipeList} setRecipeList={setRecipeList}/>} />
      <Route path='/recipe/:recipeId' element={<Recipe recipeList={recipeList} loggedInUser={loggedInUser} />} />

      <Route path='/recipe/add' element={<NewRecipe loggedInUser={loggedInUser} recipeList={recipeList} setRecipeList={setRecipeList}/>} />
      <Route path='/recipe/:recipeId/edit' element={<EditRecipe recipeList={recipeList} setRecipeList={setRecipeList}/>} />
      <Route path='/apitest' element={<ApiTest recipeList={recipeList}/>} />
      <Route path='/testfavs' element={<AverageRatings recipeList={recipeList} />}/>
      <Route path='*' element={<div className='container'><h3>Page not found!</h3></div>} />
    </Routes>
    <Footer />
    </>
  )
}