import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import RecipeContext from '../context'

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

describe('Home Page', () => {
  let container

  beforeEach(function () {
    container = render(
      <BrowserRouter>
        <RecipeContext.Provider value={{ recipeList, loggedInUser }}>
          <App />
        </RecipeContext.Provider>
      </BrowserRouter>
    ).container
  })

  it('Renders the heading and sub-heading correctly', () => {
    const heading = container.querySelector('p.display-1')
    const subHeading = container.querySelector('p.display-6')

    expect(heading).toBeDefined()
    expect(heading).toHaveTextContent('Recipe Realm')
    expect(subHeading).toBeDefined()
    expect(subHeading).toHaveTextContent('Nourish your taste buds, one recipe at a time')
  })
it('Renders the Navbar correctly', () => {
    const navbarHome = container.querySelector('Link.navbar-brand')
    const navbarSearch = screen.getByText('Search')
    const navbarSubmit = screen.getByText('Submit Recipe')
    const navbarProfile = screen.getByText(/.*\sProfile|Login/);

    expect(navbarHome).toBeDefined()
    expect(navbarSearch).toBeDefined()
    expect(navbarSubmit).toBeDefined()
    expect(navbarProfile).toBeDefined()
    expect(navbarSearch).toHaveTextContent('Search')
    expect(navbarSubmit).toHaveTextContent('Submit Recipe')
    expect(navbarProfile).toHaveTextContent(/.*\sProfile|Login/)
  })

  it('Renders the Search bar correctly', () => {
    const form = container.querySelector('.input-group')
    const button = form.querySelector('button.btn')
    const input = form.querySelector('input.form-control')

    expect(form).toBeDefined()
    expect(button).toBeDefined()
    expect(button).toHaveTextContent('Go!')
    expect(input).toBeDefined()
    expect(input.getAttribute('placeholder')).toEqual('Search')
  })

  it('Renders FeaureRecipe component', () => {
    const loadingDiv = screen.getByText('Loading...')
    expect(loadingDiv).toBeDefined()
    expect(loadingDiv).toHaveTextContent('Loading...')
  })

  it('Renders the carousel correctly', () => {
    const carousel = container.querySelector('.carousel')
    const innerCarousel = carousel.querySelector('.carousel-inner')
    expect(carousel).toBeDefined()
    expect(innerCarousel).toBeDefined()

    const previousButton = carousel.querySelector('.carousel-control-prev')
    const previousButtonText = previousButton.querySelector('span.visually-hidden')
    expect(previousButton).toBeDefined()
    expect(previousButtonText).toBeDefined()
    expect(previousButtonText).toHaveTextContent('Previous')

    const nextButton = carousel.querySelector('.carousel-control-next')
    const nextButtonText = nextButton.querySelector('span.visually-hidden')
    expect(nextButton).toBeDefined()
    expect(nextButtonText).toBeDefined()
    expect(nextButtonText).toHaveTextContent('Next')
  })

  it('Renders the footer correctly', () => {
    const footer = container.querySelector('footer')
    expect(footer).toBeDefined()
    expect(footer).toHaveTextContent('©2023 Recipe Realm')
  })

  it('Shows the Search page when Search is clicked', async () => {
    const navbarHome = container.querySelector('Link.navbar-brand')
    await userEvent.click(navbarHome)

    const heading = container.querySelector('p.display-1')
    const navbarSearch = screen.getByText('Search')
    const navbarSubmit = screen.getByText('Submit Recipe')
    const navbarProfile = screen.getByText(/.*\sProfile|Login/);

    expect(heading).toBeDefined()
    expect(navbarSearch).toBeDefined()
    expect(navbarSubmit).toBeDefined()
    expect(navbarProfile).toBeDefined()

    expect(heading).toHaveTextContent('Recipe Realm')
    expect(navbarSearch).toHaveTextContent('Search')
    expect(navbarSubmit).toHaveTextContent('Submit Recipe')
    expect(navbarProfile).toHaveTextContent(/.*\sProfile|Login/)
  })
})