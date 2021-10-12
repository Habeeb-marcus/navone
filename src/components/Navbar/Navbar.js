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

                    <i className="fas fa-bars"></i>
                </div>

                <div className="slogan d-flex">
                    <i class="fab fa-galactic-republic"></i>
                    <h4>Trusted since 2008. Over $575 million paid out to customers!</h4>
                </div>

                <div className="sell-buy">  
                    <a href="/" className="sell">SELL</a> 
                    <a href="/" className="buy">BUY</a>
                </div>

                
                
            </div>
        </div>
        <div className="bottom-nav">
            <div className="bottom-nav-main .nav-w">
                <ul>
                    <li ><a href="/">SELL YOUR TECH: </a></li>

                    <li className="top-li"><a href="/">iPHONES </a>
                          <div className="drop-down-menu">
                              <h3 className="sub-title">Sell iphone</h3>
                                <div className="sub-list">
                                    <div className="ul-cont">
                                        <ul>
                                            <li><a href="/">sell iphone 13 pro max</a></li>
                                            <li><a href="/">sell iphone 13 pro max</a></li> 
                                        <li><a href="/">sell iphone 13 pro max</a></li>
                                            <li><a href="/">sell iphone 13 pro max</a></li>
                                            <li><a href="/">sell iphone 13 pro max</a></li>
                                        </ul>
                                    </div>

                                    <div className="ul-cont">
                                        <ul>
                                            <li><a href="/">sell iphone 13 pro max</a></li>
                                            <li><a href="/">sell iphone 13 pro max</a></li> 
                                        <li><a href="/">sell iphone 13 pro max</a></li>
                                            <li><a href="/">sell iphone 13 pro max</a></li>
                                            <li><a href="/">sell iphone 13 pro max</a></li>
                                        </ul>
                                    </div>

                                    <div className="ul-cont">
                                        <ul>
                                            <li><a href="/">sell iphone 13 pro max</a></li>
                                            <li><a href="/">sell iphone 13 pro max</a></li> 
                                        <li><a href="/">sell iphone 13 pro max</a></li>
                                            <li><a href="/">sell iphone 13 pro max</a></li>
                                            <li><a href="/">sell iphone 13 pro max</a></li>
                                        </ul>
                                    </div>

                                    <div className="ul-cont">
                                        <ul>
                                            <li><a href="/">sell iphone 13 pro max</a></li>
                                            <li><a href="/">sell iphone 13 pro max</a></li> 
                                        <li><a href="/">sell iphone 13 pro max</a></li>
                                            <li><a href="/">sell iphone 13 pro max</a></li>
                                            <li><a href="/">sell iphone 13 pro max</a></li>
                                        </ul>
                                    </div>

                                    <div className="ul-cont">
                                        <ul>
                                            <li><a href="/">sell iphone 13 pro max</a></li>
                                            <li><a href="/">sell iphone 13 pro max</a></li> 
                                        <li><a href="/">sell iphone 13 pro max</a></li>
                                            <li><a href="/">sell iphone 13 pro max</a></li>
                                            <li><a href="/">sell iphone 13 pro max</a></li>
                                        </ul>
                                    </div>
                                </div>
                    </div> 
                    </li>

                    <li className="top-li"><a href="/">SAMSUNG PHONES </a>
                        
                    </li>
                    <li className="top-li"><a href="/">ALL CELL PHONES </a></li>
                    <li className="top-li"><a href="/">TABLETS </a></li>
                    <li className="top-li"><a href="/">OTHER TECH </a></li>
                    <li className="top-li"><a href="/"> BEST PRICE GAURANTEED </a></li>
                    <li className="top-li"><a href="/"> NEWS </a></li>
                    <li className="top-li"><a href="/"> HELP </a></li>

                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar