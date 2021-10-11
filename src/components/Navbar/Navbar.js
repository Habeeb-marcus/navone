import React from "react";
import "./Navbar.css"
import logo from "../../images/logo.jpg"


function Navbar() {
    return (
    <nav>
        <div className="top-nav">
            <div className="top-nav-main ">  
                <div className="logo-cont">
                    <img src={logo} alt="logo"/>
                </div>

                <div className="slogan d-flex">
                    <i class="fab fa-galactic-republic"></i>
                    <h4>Trusted since 2008. Over $575 million paid out to customers!</h4>
                </div>

                <div className="sell-buy">  
                    <a href="/" className="sell">SELL</a> 
                    <a href="/" className="buy">BUY</a>
                </div>

                {/* <a href=""></a> */}
                
            </div>
        </div>
        <div className="bottom-nav">
            <div className="bottom-nav-main .nav-w">
                <ul>
                    <li><a href="/">SELL YOUR TECH: </a></li>
                    <li><a href="/">iPHONES </a></li>
                    <li><a href="/">SAMSUNG PHONES </a></li>
                    <li><a href="/">ALL CELL PHONES </a></li>
                    <li><a href="/">TABLETS </a></li>
                    <li><a href="/">OTHER TECH </a></li>
                    <li><a href="/"> BEST PRICE GAURANTEED </a></li>
                    <li><a href="/"> NEWS </a></li>
                    <li><a href="/"> HELP </a></li>

                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar