import React from 'react'
import instagram from 'img/svg/insta-white.svg'
import facebookIcon from 'img/svg/face-transparent.svg'
import tweeter from 'img/svg/tweeter-white.svg'


const Footer = () => {

  

  return (
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
      <p className="copyright">Copyright {(new Date()).getFullYear()}<sup>&copy;</sup></p>
    </footer>
  </div>
 
  )
}

export default Footer