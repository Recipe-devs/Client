import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import RecipeContext from '../context'
import Search from './Search'

const recipeList = [
  {
    _id: "63df0670e35edccc586a2c26",
    id: 0,
    name: "Vegetable Soup",
    author: {
        _id: "63df0670e35edccc586a2c1f",
        username: "BakeBoss"
    },
    description: "A hearty and comforting soup made with a variety of vegetables, perfect for a cold winter day.",
    rating_list: [
      {
        username: {
          _id: "63df0670e35edccc586a2c20",
          username: "KitchenKing"
        },
        rating: 4,
        _id: "63df0670e35edccc586a2c27"
      },
      {
        username: {
          _id: "63df0670e35edccc586a2c21",
          username: "CookCraze"
        },
        rating: 5,
        _id: "63df0670e35edccc586a2c28"
      },
      {
        username: {
          _id: "63df0670e35edccc586a2c22",
          username: "WhiskWizard"
        },
        rating: 5,
        _id: "63df0670e35edccc586a2c29"
      }
    ],
    tags: [
      "Soup",
      "Vegetarian",
      "Easy"
    ],
    image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675125479/Recipe%20Photos/image_f7aixd.png",
    ingredients: [
      "1 onion, diced",
      "1 carrot, diced",
      "1 potato, diced",
      "1 cup of water",
      "1 can of diced tomatoes",
      "2 cloves of garlic, minced",
      "1 tsp of olive oil",
      "1 tsp of salt",
      "1/2 tsp of black pepper",
      "1/4 tsp of thyme"
    ],
    method: [
      "In a large pot, heat the olive oil over medium heat",
      "Add the onion, carrot, and potato and sauté for 5 minutes",
      "Add the garlic, salt, pepper, and thyme and sauté for an additional 2 minutes",
      "Add the diced tomatoes and water, bring the mixture to a boil",
      "Reduce the heat to low, cover and let simmer for 30 minutes or until vegetables are tender",
      "Serve with bread or crackers if desired"
    ],
    comments: [
        {
            username: {
                _id: "63df0670e35edccc586a2c20",
                username: "KitchenKing"
            },
            date: "2023-01-30T00:00:00.000Z",
            comment: "This soup was delicious! I added some shredded chicken and it was a great addition.",
            _id: "63df0670e35edccc586a2c2a"
        },
        {
            username: {
                _id: "63df0670e35edccc586a2c21",
                username: "CookCraze"
            },
            date: "2023-01-30T00:00:00.000Z",
            comment: "So easy to make and so comforting on a cold day. Will definitely make this again.",
            _id: "63df0670e35edccc586a2c2b"
        },
        {
            username: {
                _id: "63df0670e35edccc586a2c22",
                username: "WhiskWizard"
            },
            date: "2023-01-30T00:00:00.000Z",
            comment: "I was blown away by the quality of the ingredients used in this dish. It was fresh and bursting with flavor.",
            _id: "63df0670e35edccc586a2c2c"
        }
    ],
    __v: 0
  },
  {
      _id: "63df0670e35edccc586a2c2d",
      id: 1,
      name: "Spaghetti Bolognese",
      author: {
          _id: "63df0670e35edccc586a2c20",
          username: "KitchenKing"
      },
      description: "A classic Italian dish made with a rich meat sauce and spaghetti.",
      rating_list: [
          {
              username: {
                  _id: "63df0670e35edccc586a2c20",
                  username: "KitchenKing"
              },
              rating: 4,
              _id: "63df0670e35edccc586a2c2e"
          },
          {
              username: {
                  _id: "63df0670e35edccc586a2c21",
                  username: "CookCraze"
              },
              rating: 5,
              _id: "63df0670e35edccc586a2c2f"
          }
      ],
      tags: [
          "Pasta",
          "Italian",
          "Easy"
      ],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675125791/Recipe%20Photos/image_ojxpvy.png",
      ingredients: [
          "1 pound of spaghetti",
          "1 pound of ground beef",
          "1 onion, diced",
          "2 cloves of garlic, minced",
          "1 can of diced tomatoes",
          "1 cup of beef broth",
          "1 tsp of olive oil",
          "1 tsp of salt",
          "1/2 tsp of black pepper",
          "1 tsp of dried basil"
      ],
      method: [
          "Cook the spaghetti according to package instructions and set aside",
          "In a large pot, heat the olive oil over medium heat",
          "Add the onion, garlic, and ground beef and sauté until the beef is browned",
          "Add the diced tomatoes, beef broth, salt, pepper, and basil and bring to a boil",
          "Reduce the heat to low, cover and let simmer for 30 minutes",
          "Serve the meat sauce over the cooked spaghetti"
      ],
      comments: [
          {
              username: {
                  _id: "63df0670e35edccc586a2c20",
                  username: "KitchenKing"
              },
              date: "2023-01-30T00:00:00.000Z",
              comment: "This bolognese sauce was delicious! I added some red wine for extra flavor.",
              _id: "63df0670e35edccc586a2c30"
          },
          {
              username: {
                  _id: "63df0670e35edccc586a2c21",
                  username: "CookCraze"
              },
              date: "2023-01-30T00:00:00.000Z",
              comment: "This recipe is a family favorite, it's so easy to make and always a hit.",
              _id: "63df0670e35edccc586a2c31"
          },
          {
              username: {
                  _id: "63df0670e35edccc586a2c22",
                  username: "WhiskWizard"
              },
              date: "2023-01-30T00:00:00.000Z",
              comment: "This was my first time trying this cuisine, and I was pleasantly surprised by how much I enjoyed it. The portions were generous, and the prices were reasonable.",
              _id: "63df0670e35edccc586a2c32"
          }
      ],
      __v: 0
    }
]

const loggedInUser = {
    _id: "63df0670e35edccc586a2c22",
    username: "WhiskWizard",
    favourites: [
        {
            _id: "63df0670e35edccc586a2c33",
            id: 2,
            name: "Lemon Garlic Shrimp Scampi",
            description: "This Lemon Garlic Shrimp Scampi recipe is the perfect quick and easy dinner that can be ready in under 30 minutes. Succulent shrimp are cooked in a buttery lemon garlic sauce and served over pasta for a satisfying meal.",
            image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675125898/Recipe%20Photos/image_ejjnvv.png"
        }
    ],
    __v: 0
}

const searchInput = ''

describe('Search Page', () => {
  let container

  beforeEach(function () {
    container = render(
      <BrowserRouter>
        <RecipeContext.Provider value={{ recipeList, loggedInUser }}>
          <Search searchInput={searchInput} />
        </RecipeContext.Provider>
      </BrowserRouter>
    ).container
  })

  it('Renders the Search Bar', () => {
    const searchBar = screen.getByText('Search')
    expect(searchBar).toBeDefined()
  })

  it('Renders the Filters', () => {
    const cuisineFilter = screen.getByText('Cuisine')
    const cuisineOption1 = cuisineFilter.querySelector('option[value="Asian"]')
    const cuisineOption2 = cuisineFilter.querySelector('option[value="Indian"]')
    const cuisineOption3 = cuisineFilter.querySelector('option[value="Italian"]')
    const cuisineOption4 = cuisineFilter.querySelector('option[value="Mexican"]')
    const cuisineOption5 = cuisineFilter.querySelector('option[value="Thai"]')
    expect(cuisineFilter).toBeDefined()
    expect(cuisineOption1).toBeDefined()
    expect(cuisineOption2).toBeDefined()
    expect(cuisineOption3).toBeDefined()
    expect(cuisineOption4).toBeDefined()
    expect(cuisineOption5).toBeDefined()

    const typeFilter = screen.getByText('Type')
    const typeOption1 = typeFilter.querySelector('option[value="Vegetarian"]')
    const typeOption2 = typeFilter.querySelector('option[value="Vegan"]')
    const typeOption3 = typeFilter.querySelector('option[value="Gluten-free"]')
    const typeOption4 = typeFilter.querySelector('option[value="Soup"]')
    const typeOption5 = typeFilter.querySelector('option[value="Pasta"]')
    const typeOption6 = typeFilter.querySelector('option[value="dinner"]')
    const typeOption7 = typeFilter.querySelector('option[value="chicken"]')
    const typeOption8 = typeFilter.querySelector('option[value="salad"]')
    expect(typeFilter).toBeDefined()
    expect(typeOption1).toBeDefined()
    expect(typeOption2).toBeDefined()
    expect(typeOption3).toBeDefined()
    expect(typeOption4).toBeDefined()
    expect(typeOption5).toBeDefined()
    expect(typeOption6).toBeDefined()
    expect(typeOption7).toBeDefined()
    expect(typeOption8).toBeDefined()
    
    const difficultyFilter = screen.getByText('Difficulty')
    const difficultyOption1 = difficultyFilter.querySelector('option[value="Easy"]')
    const difficultyOption2 = difficultyFilter.querySelector('option[value="Medium"]')
    const difficultyOption3 = difficultyFilter.querySelector('option[value="Hard"]')
    expect(difficultyFilter).toBeDefined()
    expect(difficultyOption1).toBeDefined()
    expect(difficultyOption2).toBeDefined()
    expect(difficultyOption3).toBeDefined()

    const otherFilter = screen.getByText('Other')
    const otherOption1 = otherFilter.querySelector('option[value="Soup"]')
    const otherOption2 = otherFilter.querySelector('option[value="Vegetarian"]')
    const otherOption3 = otherFilter.querySelector('option[value="Easy"]')
    const otherOption4 = otherFilter.querySelector('option[value="Pasta"]')
    const otherOption5 = otherFilter.querySelector('option[value="Italian"]')
    expect(otherFilter).toBeDefined()
    expect(otherOption1).toBeDefined()
    expect(otherOption2).toBeDefined()
    expect(otherOption3).toBeDefined()
    expect(otherOption4).toBeDefined()
    expect(otherOption5).toBeDefined()
  })

  it('Renders the Recipe List', () => {
    const recipeOne = screen.getByText(recipeList[0].name)
    const recipeTwo = screen.getByText(recipeList[1].name)
    const recipeOneImg = container.querySelector(`img[src="${recipeList[0].image}"]`)
    const recipeTwoImg = container.querySelector(`img[src="${recipeList[1].image}"]`)

    expect(recipeOneImg.getAttribute('alt')).toEqual(recipeList[0].name)
    expect(recipeTwoImg.getAttribute('alt')).toEqual(recipeList[1].name)
    expect(recipeOne).toBeDefined()
    expect(recipeTwo).toBeDefined()
    expect(recipeOneImg).toBeDefined()
    expect(recipeTwoImg).toBeDefined()
  })
})