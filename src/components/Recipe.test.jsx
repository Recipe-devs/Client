import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recipe from './Recipe'
import RecipeContext from '../context'

const recipeList = [
  {
    id: 0,
    name: "Vegetable Soup",
    author: "KitchenKing",
    description: "A hearty and comforting soup made with a variety of vegetables, perfect for a cold winter day.",
    rating_list: [
      {username: "RecipeRocker", rating: 4}, {username: "CookCraze", rating: 5}, {username: "WhiskWizard", rating: 5}
    ],
    tags: ["Soup", "Vegetarian", "Easy"],
    image: "https://res.cloudinary.com/dzz3meeb6/image/upload/v1675125479/Recipe%20Photos/image_f7aixd.png",
    ingredients: ["1 onion, diced", "1 carrot, diced", "1 potato, diced", "1 cup of water", "1 can of diced tomatoes", "2 cloves of garlic, minced", "1 tsp of olive oil", "1 tsp of salt", "1/2 tsp of black pepper", "1/4 tsp of thyme"],
    method: ["In a large pot, heat the olive oil over medium heat", "Add the onion, carrot, and potato and sauté for 5 minutes", "Add the garlic, salt, pepper, and thyme and sauté for an additional 2 minutes", "Add the diced tomatoes and water, bring the mixture to a boil", "Reduce the heat to low, cover and let simmer for 30 minutes or until vegetables are tender", "Serve with bread or crackers if desired"],
    comments: [
      {
        username: "RecipeRocker",
        date: new Date("2023-01-30"),
        comment: "This soup was delicious! I added some shredded chicken and it was a great addition."
      },
      {
        username: "CookCraze",
        date: new Date("2023-01-30"),
        comment: "So easy to make and so comforting on a cold day. Will definitely make this again."
      },
      {    
        username: "WhiskWizard",
        date: new Date("2023-01-30"),
        comment: "I was blown away by the quality of the ingredients used in this dish. It was fresh and bursting with flavor."
      }
    ]
  },
  {
    id: 1,
    name: "Spaghetti Bolognese",
    author: "KitchenKing",
    description: "A classic Italian dish made with a rich meat sauce and spaghetti.",
    rating_list: [
      {username: "RecipeRocker", rating: 4}, {username: "CookCraze", rating: 5}
    ],
    tags: ["Pasta", "Italian", "Easy"],
    image: "https://res.cloudinary.com/dzz3meeb6/image/upload/v1675125791/Recipe%20Photos/image_ojxpvy.png",
    ingredients: ["1 pound of spaghetti", "1 pound of ground beef", "1 onion, diced", "2 cloves of garlic, minced", "1 can of diced tomatoes", "1 cup of beef broth", "1 tsp of olive oil", "1 tsp of salt", "1/2 tsp of black pepper", "1 tsp of dried basil"],
    method: ["Cook the spaghetti according to package instructions and set aside", "In a large pot, heat the olive oil over medium heat", "Add the onion, garlic, and ground beef and sauté until the beef is browned", "Add the diced tomatoes, beef broth, salt, pepper, and basil and bring to a boil", "Reduce the heat to low, cover and let simmer for 30 minutes", "Serve the meat sauce over the cooked spaghetti"],
    comments: [
      {
        username: "RecipeRocker",
        date: new Date("2023-01-30"),
        comment: "This bolognese sauce was delicious! I added some red wine for extra flavor."
      },
      {
        username: "CookCraze",
        date: new Date("2023-01-30"),
        comment: "This recipe is a family favorite, it's so easy to make and always a hit."
      },
      {
        username: "WhiskWizard",
        date: new Date("2023-01-30"),
        comment: "This was my first time trying this cuisine, and I was pleasantly surprised by how much I enjoyed it. The portions were generous, and the prices were reasonable."
      }
    ]
  }
]

const recipeId = 0
const recipe = recipeList[recipeId]

describe('Home Page', () => {
  let container

  beforeEach(function () {
    container = render(
      <BrowserRouter>
        <RecipeContext.Provider value={{ recipeList }}>
          <Routes>
            {/* <Recipe recipeId={recipeId} recipe={recipe} /> */}
            <Route path="/recipe/:recipeId" element={Recipe} />
          </Routes>
        </RecipeContext.Provider>
      </BrowserRouter>,
      { route: `/recipe/${recipeId}`}
    ).container

    console.log(container)
  })

  it('Renders the Navbar correctly', () => {
    const navbarHome = container.querySelector('Link.navbar-brand')
    // const navbarSearch = screen.getByText('Search')
    // const navbarSubmit = screen.getByText('Submit Recipe')
    // const navbarProfile = screen.getByText(/.*\sProfile|Login/);

    expect(navbarHome).toBeDefined()
    // expect(navbarSearch).toBeDefined()
    // expect(navbarSubmit).toBeDefined()
    // expect(navbarProfile).toBeDefined()
    // expect(navbarSearch).toHaveTextContent('Search')
    // expect(navbarSubmit).toHaveTextContent('Submit Recipe')
    // expect(navbarProfile).toHaveTextContent(/.*\sProfile|Login/)
  })
})