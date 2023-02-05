import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import RecipeContext from '../context'
import NewRecipe from './NewRecipe'

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

describe('Add Recipe Page', () => {
  let container

  beforeEach(function () {
    container = render(
      <BrowserRouter>
        <RecipeContext.Provider value={{ recipeList, loggedInUser }}>
          <NewRecipe />
        </RecipeContext.Provider>
      </BrowserRouter>
    ).container
  })
  it('Renders the Heading', () => {
    const heading = container.querySelector('h1')
    expect(heading).toBeDefined()
    expect(heading).toHaveTextContent('Submit a new recipe')
  })
  it('Renders the form', () => {
    const nameForm = container.querySelector('label[for="name"]')
    const descriptionForm = container.querySelector('label[for="description"]')
    const tagsForm = container.querySelector('label[for="tags"]')
    const imageForm = container.querySelector('label[for="image"]')
    const ingredientsForm = container.querySelector('label[for="ingredients"]')
    const methodForm = container.querySelector('label[for="method"]')
    const submitButton = container.querySelector('input[type="submit"]')

    expect(nameForm).toBeDefined()
    expect(descriptionForm).toBeDefined()
    expect(tagsForm).toBeDefined()
    expect(imageForm).toBeDefined()
    expect(ingredientsForm).toBeDefined()
    expect(methodForm).toBeDefined()
    expect(submitButton).toBeDefined()

    expect(nameForm).toHaveTextContent('Recipe Name')
    expect(descriptionForm).toHaveTextContent('Description')
    expect(tagsForm).toHaveTextContent('Recipe Tags (separated by semi-colons)')
    expect(imageForm).toHaveTextContent('Image (URL format, default image applied if none entered)')
    expect(ingredientsForm).toHaveTextContent('Ingredients (separated by semi-colons)')
    expect(methodForm).toHaveTextContent('Method (separated by semi-colons; numbers will be automatically added)')
  })
})