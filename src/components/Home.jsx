import React, { useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
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
		setSearchInput(event.target.value)
	}

console.log(setSearchInput)
	//highest rated recipe for featured recipe and image url
	let highest_average_rating = 0;
	let highest_rated_recipe = ""
	for (let i = 0; i < recipeList.length; i++) {
		let total_rating = 0
		for (let j = 0; j < recipeList[i].rating_list.length; j++) {
			total_rating += recipeList[i].rating_list[j].rating
		}
		let average_rating = total_rating / recipeList[i].rating_list.length
		if (average_rating > highest_average_rating) {
			highest_average_rating = average_rating
			highest_rated_recipe = recipeList[i]
		}
	}

	// Carousel link component
	const CarouselLink = ({searchPrefill, imgURL, carouselText, active}) => {
		return (
			<Link className="carousel-link" to="/search" onClick={() => handleClick(`${searchPrefill}`)}>
				<div className={`carousel-item   ${active} ? "active" : "" }`}>
					<img src={imgURL} className="backdrop rounded" alt="..."/>
					<p className="text-center display-1 mt-5">{carouselText}</p>
				</div>
			</Link>
	)}

 	return (
		<div className="container-fluid landing">
			{/* main landing */}
			<div className="text-center hero">
				{/* backdrop image */}
				{/* <img src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" className="img-fluid backdrop" alt="Responsive image"/> */}
				{/* <img src="https://res.cloudinary.com/dzz3meeb6/image/upload/a_180/v1675250314/Recipe%20Photos/image_ogmf9q.png" className="img-fluid backdrop" alt="Responsive image"/> */}
				<img src="https://res.cloudinary.com/dzz3meeb6/image/upload/v1675251255/Recipe%20Photos/image_tafm0z.png" className="img-fluid backdrop" alt="Responsive image"/>
				{/* hero */}
				<p className="display-1">Recipe Realm</p>
				<p className="display-6">Nourish your taste buds, one recipe at a time</p>
				<div className="col-lg-6 mx-auto">
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<div className="input-group mb-3 ">
							<input className="form-control" id="floatingInput" placeholder="Search" onChange={handleChange}  />
							<Link to="/search">
							<button className="btn btn-outline-secondary" type="button" id="button-addon2" style={{backgroundColor: "lightGray", }}>Go!</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* featured recipe */}
			<div className="row d-flex align-items-center m-5 featured-recipe">
				<div className="col-lg-6 ">
					<Link to={`/recipe/${highest_rated_recipe.id}`}>
					<img src={highest_rated_recipe.image} className="img-fluid rounded featured-img" alt="place holder" />
					</Link>
				</div>
					<div className="col-lg-6">
						<Link className="featured-recipe-link" to={`/recipe/${highest_rated_recipe.id}`}>
							<div>
								<p className="text-center h1 my-4">Featured Recipe</p>
								<p className="h4">{highest_rated_recipe.name}</p>
								<p>{highest_rated_recipe.description}</p>
							</div>
						</Link>					
					</div>
			</div>
			{/* carousel */}
			<div>
				<div id="carouselExampleIndicators" className="carousel slide m-5">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
					</div>
					<div className="carousel-inner">
						<CarouselLink active="active" searchPrefill="chicken" carouselText="CHICKEN" imgURL="https://res.cloudinary.com/dzz3meeb6/image/upload/a_90/v1675429266/Recipe%20Photos/pexels-photo-6210959_dmrbqu.jpg" />
						<CarouselLink searchPrefill="mexican" carouselText="MEXICAN" imgURL="https://recipe-realm-images.s3.amazonaws.com/uploads/mexican-gbb5482fa4_1280.jpg" />
						<CarouselLink searchPrefill="indian" carouselText="INDIAN" imgURL="https://recipe-realm-images.s3.amazonaws.com/uploads/biryani-g849e363c0_1280.jpg" />
						<CarouselLink searchPrefill="salad" carouselText="SALAD" imgURL="https://recipe-realm-images.s3.amazonaws.com/uploads/salad-g732cb055a_1280.jpg" />
						<CarouselLink searchPrefill="vegetarian" carouselText="VEGETARIAN" imgURL="https://recipe-realm-images.s3.amazonaws.com/uploads/casserole-dish-g300399764_1280.jpg" />
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


