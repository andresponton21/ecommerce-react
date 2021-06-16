import React from 'react'
import lupe from 'img/svg/lupe.svg'
import onestars from 'img/svg/onestars.svg'
import twostars from 'img/svg/twostars.svg'
import threestars from 'img/svg/threestars.svg'
import fourstars from 'img/svg/fourstars.svg'
import fivestars from 'img/svg/fivestars.svg'
import instagram from 'img/svg/insta-white.svg'
import facebookIcon from './assets/SVG/face-transparent.svg'
import tweeter from 'file:///Users/andresp/Desktop/humber%20summer/rocco/ecommerce-react/src/img/svg/tweeter-white.svg'





//import bike from 'img/bike.jpg'
//import logo from 'img/svg/logo.svg'



const App = () => {
  return (
  
    <div >
    <div className="top-head">
    <header className="page-header">
      
      <a href="index.html" className="logo"></a>

     
      <button type="button" className="nav-toggle">
        <span className="material-icons">menu</span>
      </button>
      <nav aria-label="Primary" id="nav-menu" className="navigation">
        <ul className="menu">
          <li><a href="#" className="show-submenu" >Shop</a>
            <ul className="submenu" id="submenu">
              <li><a href="#">Cardio Equipment</a></li>
              <li><a href="#">Conditioning</a></li>
              <li><a href="#">Weights</a></li>
            </ul>
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      
      <form className="search">
        <label>Search:
          <input type="search" name="find" id="find" className="search-input" autoComplete="off"  placeholder="Look for a product"/>
        </label>
        <button type="button" className="search-button"><img className="magnifier" src={lupe} alt="magnifier" /></button>
      </form>

     
      <ul className="your-products">
        <li className="favourite-sm"><a href="#"><span  aria-label="Favourites"></span></a></li>
        <li className="only-cart"><a href="#" ><span className="added-to-cart" aria-label="Items in your cart">0</span></a></li>
      </ul>
    </header>
  </div>
    <main className="products">
      <header className="heading">
        <h1>Sale on Cross Fit Items</h1>
      </header>

     
      <form className="filters">
        <h2>Filters</h2>

        <div className="filter-options">
          <fieldset className="filter-category">
            <legend>Categories</legend>
            <ul className="filter-list">
              <li><input type="checkbox" className="checkbox" name="category" value="conditioning" id="conditioning"/> <label for="conditioning" className="check-button">Conditioning</label></li>
              <li><input type="checkbox" className="checkbox" name="category" value="calisthenics" id="calisthenics"/> <label for="calisthenics" className="check-button">Calisthenics</label></li>
              <li><input type="checkbox" className="checkbox" name="category" value="dumbbells" id="dumbbells"/> <label for="dumbbells" className="check-button">Dumbbells</label></li>
              <li><input type="checkbox" className="checkbox" name="category" value="weights" id="weights"/> <label for="weights" className="check-button">Weights</label></li>
              <li><input type="checkbox" className="checkbox" name="category" value="cardio" id="cardio"/> <label for="cardio" className="check-button">Cardio</label></li>
            </ul>
          </fieldset>
          
         
          <fieldset className="slider">
            <label for="filterPrice">Filter by price range:</label><br/>
            <input type="range" name="price" className="input-slider" id="filterPrice" value="0" min="0" max="300" step="1"/>
            <output for="filterPrice" className="output-price">$0.0</output>
          </fieldset>
          <fieldset id="filterRating">
            <legend>Ratings</legend>
            <ol className="filter-list">
              <li>
                <input type="radio" className="radio radio-star" name="rating" value="five" id="aboveFive"/>
                <label for="aboveFive" className="rating-label">
                 <img className="star" src={fivestars} alt="star5"/>
                </label>
              </li>
              <li>
                <input type="radio" className="radio radio-star" name="rating" value="four" id="aboveFour"/>
                <label for="aboveFour" className="rating-label">
                 <img className="star" src={fourstars} alt="star4"/>
                </label>
              </li>
              <li>
                <input type="radio" className="radio radio-star" name="rating" value="three" id="aboveThree"/>
                <label for="aboveThree" className="rating-label">
                 <img src={threestars} className="star" alt="star3"/>
                </label>
              </li>
              <li>
                <input type="radio" className="radio radio-star" name="rating" value="two" id="aboveTwo"/>
                <label for="aboveTwo" className="rating-label">
                 <img src={twostars} className="star" alt="star2"/>
                </label>
              </li>
              <li>
                <input type="radio" className="radio radio-star" name="rating" value="one" id="aboveOne"/>
                <label for="aboveOne" className="rating-label">
                 <img src={onestars} className="star" alt="star1"/>
                </label>
              </li>
            </ol>
          </fieldset>
        </div>
        <fieldset>
          <label className="show-options" for="sort">Show:</label>
          <select className="select-option" name="sort" id="sort">
            <option value="select" selected>Select an Option...</option>
            <option value="0">Price, Lowest to Highest</option>
            <option value="1">Price, Highest to Lowest</option>
          </select>
        </fieldset>
      </form>

      <section className="results">
        
        

        
       
        </section>

      <nav aria-label="Pagination" className="pagination">
        <p className="page-number">1-6 of 23 products found</p>
        <ol className="pages">
          <li><a href="#" aria-label="Current Page, Page 1" aria-current="true">1</a></li>
          <li><a href="#" aria-label="Page 2">2</a></li>
          <li><a href="#" aria-label="Page 3">3</a></li>
          <li><a href="#" aria-label="Page 4">4</a></li>
          <li><a href="#" aria-label="Page 5">5</a></li>
        </ol>
      </nav>
    </main>

    <div className="footer-cont">
    <footer className="page-footer">
      <ul className="social">
        <li><a href={facebookIcon}><span className="media">
          <img src={facebookIcon} alt="facebook-icon"/>
        </span>Facebook </a></li>
        <li><a href={tweeter}><span className="media">
          <img src={tweeter} alt="tweeter-icon"/>
        </span>Tweeter </a></li>
        <li><a href={instagram}><span className="media">
          <img src={instagram} alt="instagram-icon"/>
        </span>Instagram </a></li>
      </ul>
      <nav aria-label="Legal">
        <ul className="legal">
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Accessibility Policy</a></li>
        </ul>
      </nav>
      <p className="copyright">&copy; Copyright, Fitness4all, 2021.</p>
    </footer>
  </div>
    </div>
  
  )
}

export default App