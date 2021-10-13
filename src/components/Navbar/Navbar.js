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
                    <li className="top-li" ><a href="/">SELL YOUR TECH: </a></li>

                    <li className="top-li"><a href="/">iPHONES  <i className="fas fa-chevron-down"></i> </a>
                          <div className="drop-down-menu">
                              <h3 className="sub-title">Sell iPhone</h3>
                                <div className="sub-list">
                                    <div className="ul-cont">
                                        <ul>
                                            <li><a href="/">sell iPhone 13 Pro max</a></li>
                                            <li><a href="/">sell iPhone 13 Pro</a></li> 
                                        <li><a href="/">sell iPhone 13 </a></li>
                                            <li><a href="/">sell iPhone 13 mini</a></li>
                                            <li><a href="/">sell iPhone 12 Pro max</a></li>
                                        </ul>
                                    </div>

                                    <div className="ul-cont">
                                        <ul>
                                            <li><a href="/">sell iPhone 12 Pro</a></li>
                                            <li><a href="/">sell iPhone 12 </a></li> 
                                        <li><a href="/">sell iPhone 12 mini</a></li>
                                            <li><a href="/">sell iPhone 11 Pro max </a></li>
                                            <li><a href="/">sell iPhone 11 Pro </a></li>
                                        </ul>
                                    </div>

                                    <div className="ul-cont">
                                        <ul>
                                            <li><a href="/">sell iPhone 11 </a></li>
                                            <li><a href="/">sell iPhone XE (2020)</a></li> 
                                        <li><a href="/">sell iPhone XS max</a></li>
                                            <li><a href="/">sell iPhone XS</a></li>
                                            <li><a href="/">sell iPhone XR</a></li>
                                        </ul>
                                    </div>

                                    <div className="ul-cont">
                                        <ul>
                                            <li><a href="/">sell iPhone X</a></li>
                                            <li><a href="/">sell iPhone 8 Plus</a></li> 
                                        <li><a href="/">sell iPhone 8</a></li>
                                            <li><a href="/">sell iPhone 7 Plus</a></li>
                                            <li><a href="/">sell iPhone 7</a></li>
                                        </ul>
                                    </div>

                                    <div className="ul-cont">
                                        <ul>
                                            <li><a href="/">sell iPhone 13 Pro max</a></li>
                                            <li><a href="/">sell iPhone 13 Pro max</a></li> 
                                        <li><a href="/">sell iPhone 13 Pro max</a></li>
                                            <li><a href="/">sell iPhone 13 Pro max</a></li>
                                            <li><a href="/">sell iPhone 13 Pro max</a></li>
                                        </ul>
                                    </div>
                                </div>
                               <p className="see-more">
                                   <a href="/" className="iphones">See all iPhone trade in {'>>'}</a>
                                   <a href="/" className="iphone13">iPhone 13 {'>>'}</a>
                               </p>
                           </div> 
                    </li>

                    <li className="top-li"><a href="/">SAMSUNG PHONES <i className="fas fa-chevron-down"></i> </a>
                         <div className="drop-down-menu">
                              <h3 className="sub-title">DON'T Sell iPhone</h3>
                                <div className="sub-list">
                                    <div className="ul-cont">
                                        <ul>
                                            <li><a href="/">sell iPhone 13 Pro max</a></li>
                                            <li><a href="/">sell iPhone 13 Pro</a></li> 
                                        <li><a href="/">sell iPhone 13 </a></li>
                                            <li><a href="/">sell iPhone 13 mini</a></li>
                                            <li><a href="/">sell iPhone 12 Pro max</a></li>
                                        </ul>
                                    </div>

                                    <div className="ul-cont">
                                        <ul>
                                            <li><a href="/">sell iPhone 12 Pro</a></li>
                                            <li><a href="/">sell iPhone 12 </a></li> 
                                        <li><a href="/">sell iPhone 12 mini</a></li>
                                            <li><a href="/">sell iPhone 11 Pro max </a></li>
                                            <li><a href="/">sell iPhone 11 Pro </a></li>
                                        </ul>
                                    </div>

                                    <div className="ul-cont">
                                        <ul>
                                            <li><a href="/">sell iPhone 11 </a></li>
                                            <li><a href="/">sell iPhone XE (2020)</a></li> 
                                        <li><a href="/">sell iPhone XS max</a></li>
                                            <li><a href="/">sell iPhone XS</a></li>
                                            <li><a href="/">sell iPhone XR</a></li>
                                        </ul>
                                    </div>

                                    <div className="ul-cont">
                                        <ul>
                                            <li><a href="/">sell iPhone X</a></li>
                                            <li><a href="/">sell iPhone 8 Plus</a></li> 
                                        <li><a href="/">sell iPhone 8</a></li>
                                            <li><a href="/">sell iPhone 7 Plus</a></li>
                                            <li><a href="/">sell iPhone 7</a></li>
                                        </ul>
                                    </div>

                                    <div className="ul-cont">
                                        <ul>
                                            <li><a href="/">sell iPhone 13 Pro max</a></li>
                                            <li><a href="/">sell iPhone 13 Pro max</a></li> 
                                        <li><a href="/">sell iPhone 13 Pro max</a></li>
                                            <li><a href="/">sell iPhone 13 Pro max</a></li>
                                            <li><a href="/">sell iPhone 13 Pro max</a></li>
                                        </ul>
                                    </div>
                                </div>
                               <p className="see-more">
                                   <a href="/" className="iphones">See all iPhone trade in {'>>'}</a>
                                   <a href="/" className="iphone13">iPhone 13 {'>>'}</a>
                               </p>
                           </div> 
                    </li>
                    <li className="top-li"><a href="/">ALL CELL PHONES  <i className="fas fa-chevron-down"></i> </a></li>
                    <li className="top-li"><a href="/">TABLETS <i className="fas fa-chevron-down"></i> </a></li>
                    <li className="top-li"><a href="/">OTHER TECH <i className="fas fa-chevron-down"></i> </a></li>
                    <li className="top-li"><a href="/"> BEST PRICE GAURANTEED </a></li>
                    <li className="top-li"><a href="/"> NEWS </a></li>
                    <li className="top-li"><a href="/"> HELP <i className="fas fa-chevron-down"></i> </a></li>

                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar