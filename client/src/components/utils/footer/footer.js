import React from "react";
import "./footer.css"
import img from "../nav/logo"
import { Link } from "react-router-dom"


export const Footer = ()=>{

    return(
        <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>0800-444-nutriu</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>nutri-u@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="/"><img src={img} class="img-fluid" alt="logo" width={75}/></a>
                            </div>
                            <div class="footer-text">
                                <p>
Our main objective as a food application is to provide the client with different types of diets, promoting health, differentiation and the work of nutritionists</p>
                            </div>

                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Nutri-u Utils</h3>
                            </div>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="about">about</a></li>
                                <li><a href="/services">services</a></li>
                                <li><a href="/nustritionist">Nutritionist</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds and the posibility to create new recipes</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                <ul>
                                <li><a href="/register">Sing UP</a></li>
                            </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved - Nutri-U APP</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )

}