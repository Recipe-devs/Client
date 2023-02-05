import React, { useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import FeatureRecipe from './FeatureRecipe'
import RecipeContext from '../context'
import './Styles.css'

const Home = ({ setSearchInput }) => {
	// Scroll to top on page load
	useEffect(() => {setTimeout(() => {window.scrollTo(0, 0)}, 0)}, [])

	const { recipeList } = useContext(RecipeContext)

	//handles prefilling of search page
	const handleClick = (prefillSearch ) => {
		setSearchInput(prefillSearch)
	}

	//handles search input change
	const handleChange = (event) => {
		setSearchInput(event.target.value.toLowerCase())
	}

	// Carousel link component
	const CarouselLink = ({searchPrefill, imgURL, carouselText, active}) => {
		return (
			<Link className="carousel-link" to="/search" onClick={() => handleClick(`${searchPrefill}`)}>
				<div className={`carousel-item   ${active} ? "active" : "" }`}>
					<img src={imgURL} className="carousel-image" alt="carousel image"/>
					<p className="text-center display-1 mt-5">{carouselText}</p>
				</div>
			</Link>
	)}

 	return (
		<div className="container-fluid landing">
			{/* main landing */}
			<div className="text-center hero">
				{/* backdrop image */}
				<img src="https://res.cloudinary.com/dzz3meeb6/image/upload/v1675251255/Recipe%20Photos/image_tafm0z.png" className="img-fluid backdrop" alt="Responsive image"/>
				{/* hero */}
				<p className="display-1 hero-text">Recipe Realm</p>
				<p className="display-6">Nourish your taste buds, one recipe at a time</p>
				<div className="col-lg-6 mx-auto">
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<div className="input-group mb-3 ">
							<input className="form-control" id="floatingInput" placeholder="e.g salad" onChange={handleChange}  />
							<Link to="/search">
							<button className="btn btn-outline-secondary" type="button" id="button-addon2" style={{backgroundColor: "lightGray", }}>Go!</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* featured recipe, return a random recipe with average rating > 4.2 */}
			<FeatureRecipe />
			{/* carousel */}
			<div>
				<div id="carouselExampleIndicators" className="carousel slide m-5">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

					</div>
					<div className="carousel-inner">
						<CarouselLink active="active" searchPrefill="mexican" carouselText="MEXICAN" imgURL="https://res.cloudinary.com/dzz3meeb6/image/upload/v1675479373/Recipe%20Photos/mexican-gbb5482fa4_1280_lspk4l.jpg" />
						<CarouselLink searchPrefill="indian" carouselText="INDIAN" imgURL="https://res.cloudinary.com/dzz3meeb6/image/upload/v1675479433/Recipe%20Photos/biryani-g849e363c0_1280_dqlpie.jpg" />
						<CarouselLink searchPrefill="italian" carouselText="ITALIAN" imgURL="https://res.cloudinary.com/dzz3meeb6/image/upload/v1675481912/Recipe%20Photos/photo-1595295333158-4742f28fbd85_sc7qqy.jpg" />
						<CarouselLink searchPrefill="vegetarian" carouselText="VEGETARIAN" imgURL="https://res.cloudinary.com/dzz3meeb6/image/upload/v1675479742/Recipe%20Photos/casserole-dish-g300399764_1280_wrwf0b.jpg" />
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
				</div>	
			</div>
		
		</div>

    )
}

export default Home