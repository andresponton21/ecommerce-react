import React, {useState} from 'react'
import Layout from 'components/Layout'
//import SearchFilter from 'components/SearchFilter'
import SearchResults from 'components/SearchResults'
import onestars from 'img/svg/onestars.svg'
import twostars from 'img/svg/twostars.svg'
import threestars from 'img/svg/threestars.svg'
import fourstars from 'img/svg/fourstars.svg'
import fivestars from 'img/svg/fivestars.svg'

const Products = ({data}) => {
  
  const [searchState, setSearchState] = useState({
    minPrice: 0,
    query: ``,
    filterCategory:[],
    ratingStar:``,
    sort: () => {}
  })

  
  const {minPrice, query, filterCategory, sort, ratingStar} = searchState


  
  const searchResult = data.filter(({price}) => price.after >= minPrice)
      .filter(({name}) => name.toUpperCase().includes(query.toUpperCase()))
      .filter((product) => filterCategory.length === 0 || 
        product.category.filter((cat) => filterCategory.includes(cat)).length > 0)
      .filter((product) => product.rating.includes(ratingStar)) 
      .sort(sort)

  
  
  const handlePriceChange = (event) => {

    setSearchState({
      ...searchState,
      minPrice: Number(event.target.value),
    })
  }

  const handleQueryChange = (event) => {

    setSearchState({
      ...searchState,
      query: event.target.value
    })
  }
  const handleSortChange = ({target}) => {

    let sorting
    if (target.value === "0") {
      sorting = (a, b) => a.price.after - b.price.after
    } else if (target.value === "1") {
      sorting = (a, b) => b.price.after - a.price.after
    }

    setSearchState({
      ...searchState,
      sort: sorting
    })
  }

  const handleCategoryChange = (event) =>  {
  
    const newProductCategory = event.target.form.elements[event.target.name]
                          
    setSearchState({
      ...searchState,
      filterCategory : [...newProductCategory]
        .filter((prod) => prod.checked)
        .map((prod) => prod.value)
    })
  }
  const handleRatingChange = (event) => {
    
    setSearchState({
      ...searchState,
      ratingStar: event.target.value
    })
    
  }

  return (

    <Layout search={searchState} setSearch = {setSearchState}>
      
      <header className="heading">
       <h1>Sale on Cross Fit Items</h1>
      </header>

      <form className="filters">
        <h2>Filters</h2>

        <div className="filter-options">
          <fieldset className="filter-category" onChange={handleCategoryChange}>
            <legend>Categories</legend>
            <ul className="filter-list">
              <li><input type="checkbox" className="checkbox" name="category" value="conditioning" id="conditioning"/> <label htmlFor="conditioning" className="check-button">Conditioning</label></li>
              <li><input type="checkbox" className="checkbox" name="category" value="calisthenics" id="calisthenics"/> <label htmlFor="calisthenics" className="check-button">Calisthenics</label></li>
              <li><input type="checkbox" className="checkbox" name="category" value="dumbbells" id="dumbbells"/> <label htmlFor="dumbbells" className="check-button">Dumbbells</label></li>
              <li><input type="checkbox" className="checkbox" name="category" value="weights" id="weights"/> <label htmlFor="weights" className="check-button">Weights</label></li>
              <li><input type="checkbox" className="checkbox" name="category" value="cardio" id="cardio"/> <label htmlFor="cardio" className="check-button">Cardio</label></li>
            </ul>
          </fieldset>
          
        
          <fieldset className="slider">
            <label htmlFor="filterPrice">Filter by price range:</label><br/>
            <input type="range" name="price" className="input-slider" id="filterPrice"  min="0" max="620" step="1" onChange={handlePriceChange}/>
            <output htmlFor="filterPrice" className="output-price">{minPrice}</output>
          </fieldset>

          <fieldset id="filterRating" onChange={handleRatingChange}>
            <legend>Ratings</legend>
            <ol className="filter-list">
              <li>
                <input type="radio" className="radio radio-star" name="rating" value="five" id="aboveFive"/>
                <label htmlFor="aboveFive" className="rating-label">
                <img className="star" src={fivestars} alt="star5"/>
                </label>
              </li>
              <li>
                <input type="radio" className="radio radio-star" name="rating" value="four" id="aboveFour"/>
                <label htmlFor="aboveFour" className="rating-label">
                <img className="star" src={fourstars} alt="star4"/>
                </label>
              </li>
              <li>
                <input type="radio" className="radio radio-star" name="rating" value="three" id="aboveThree"/>
                <label htmlFor="aboveThree" className="rating-label">
                <img src={threestars} className="star" alt="star3"/>
                </label>
              </li>
              <li>
                <input type="radio" className="radio radio-star" name="rating" value="two" id="aboveTwo"/>
                <label htmlFor="aboveTwo" className="rating-label">
                <img src={twostars} className="star" alt="star2"/>
                
                </label>
              </li>
              <li>
                <input type="radio" className="radio radio-star" name="rating" value="one" id="aboveOne"/>
                <label htmlFor="aboveOne" className="rating-label">
                <img src={onestars} className="star" alt="star1"/>
                
                </label>
              </li>
            </ol>
          </fieldset>
        </div>
        <fieldset>
          <label className="show-options" htmlFor="sort">Show:</label>
          <select className="select-option" name="sort" id="sort" defaultValue="select" onChange={handleSortChange}>
            <option value="select">Select an Option...</option>
            <option value="0">Price, Lowest to Highest</option>
            <option value="1">Price, Highest to Lowest</option>
          </select>
        </fieldset>
      </form>

      <SearchResults result={searchResult} />
 

     
    </Layout>
  )
}

export default Products