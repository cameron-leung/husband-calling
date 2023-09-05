import React from 'react';
import './HomePage.css'; // Import your CSS file
import Link from "next/link";
import logo from './megaphoneLogo.png'

function HomePage() {
  return (
    <div>
      {/* Top navigation menu */}
      <nav id="navbar">
        <div id="navbar-left">
          <Link href="/"><img width="20px" src={logo} id="logo"/></Link>
          <Link href="/"><span className="bold">Husband Calling </span> Contest</Link>
        </div>
        <ul id="navbar-right">
          <li><Link href="AboutPage">About</Link></li>
          <li><Link href="Contestants">Contestants</Link></li>
        </ul>
      </nav>
      
      {/* Large slogan */}
      <div className="container">
        <p className="text" id="one-call-text">One Call</p>
        <p className="text" id="away-text">Away.</p>
      </div>
      
     {/* bottom contents  */}
      <div className="bottom-container">
      <p className="text" id="description">
        Sending words of warmth, care,<br /> and love to your partner
      </p>
      <Link href="/AboutPage">
        <button className="button" id="learn-more-button">
          Learn More
        </button>
      </Link>
    </div>
      </div>
  )
}

export default HomePage;