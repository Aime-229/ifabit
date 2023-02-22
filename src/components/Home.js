import React, { useState, useEffect } from "react";
//import axios from 'axios';
import Accordion from "react-bootstrap/Accordion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../assets/css/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import mobile from "../assets/images/groupe.png";
import paiement from "../assets/img/paiement.png";
import moyen from '../assets/images/Groupe79.png';
import phoneAPI from '../assets/images/Groupe78.png';
import transfert from "../assets/img/Transfert.png";
import computer from "../assets/img/computer1.png";
import download from "../assets/img/Phone-1.png";
import faq from "../assets/img/FAQ ICON.png";
import ios from "../assets/img/ios.png";
import android from "../assets/img/android.png";
import Artboard from "../assets/img/Artboard.png";
import CarousselEchange from "./CarousselEchange";
import {
  FaBars,
  FaStar,
  FaTimes,
  FaCode,
  FaMoneyCheckAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
//import {FiArrowUpRight, FiArrowDown, FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
//import logo from '../assets/img/logo.png';
import { RiArrowLeftRightFill } from "react-icons/ri";
import { FaDollarSign, FaHandshake } from "react-icons/fa";


import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Carousel from "react-bootstrap/Carousel";
import "animate.css";
import InfiniteCarousel from "react-leaf-carousel";
import Echanges from './Echanges';

function Home() {
  return (
    <div>
      <Navbar />
      {/* ================================== Caroussel menu  début ==============================================*/} 
      <div className="hero">
      <div className="container py-5">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6" id="labelh1p">
                  <h2
                    className="text-uppercase text-white"
                    style={{ fontFamily: "poppins" }}
                  >
                    Effectuez vos transactions d'argent en toute sécurité !
                  </h2>
                  <p
                    className="text-white"
                    style={{ fontFamily: "Work Sans", fontSize: "20px" }}
                  >
                    ifaBit, une révolution dans le domaine des plateformes de change Internationales.
                  </p>
                  <a
                    className="btn btn-color"
                    href="https://app.ifabit.com/auth/signup"
                    style={{
                      textAlign: "justify",
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                    }}
                  >
                    Commencer maintenant
                  </a>
                </div>
                <div className="col-lg-6" id="divImg">
                  <img
                    className="img-fluid mobile"
                    src={mobile}
                    alt="mobile"
                  />
                </div>
              </div>
            </div>
      </div>
 {/* ================================== caroussel menu  fin ==============================================*/} 
{/* ================================== Commentaire  début ==============================================*/} 
      <div className="crypto py-5">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-lg-4 my-2 mt-5">
              <div className="card">
                <div className="card-body">
                  <div className="card-text">
                   <div className="text-center">
                    <FaDollarSign fontSize={35} />
                   </div>
                    <h5 className="text-center">
                     Transférez de l'argent
                    </h5>
                    <p>
                    Transférez de l'argent en toute
                       sécurité à vos proches à moindre 
                       coût. Payer vos factures , achétez
                        des biens et services directement
                         depuis votre portefuille IFABIT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-2 ">
              <div className="card cardcenter">
                <div className="card-body d-flex align-items-center">
                  <div className="card-text">
                    <div className="text-center">
                    <RiArrowLeftRightFill fontSize={35} />
                    </div>
                    <h5 className="text-center">
                      Achetez et Vendez des<br/>
                       cryptomonnaies !
                    </h5>
                    <p>
                    Transférez de l'argent en toute
                       sécurité à vos proches à moindre 
                       coût. Payer vos factures , achétez
                        des biens et services directement
                         depuis votre portefuille IFABIT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-2 mt-5">
              <div className="card">
                <div className="card-body">
                  <div className="card-text">
                  <div className="text-center">
                    <FaHandshake fontSize={35} />
                  </div>
                    <h5 className="text-center">
                     Devenez partenaire<br/>
                      et gagnez de l'argent !
                    </h5>
                    <p>
                      Transférez de l'argent en toute
                       sécurité à vos proches à moindre 
                       coût. Payer vos factures , achétez
                        des biens et services directement
                         depuis votre portefuille IFABIT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* ================================== Commentaire  début ==============================================*/} 
{/* ================================== Devises disponible   début ==============================================*/} 


  
<div className='container py-4'>
  <div className='row py-5'>
    <div className='col-md-6'>
      <h2 className="devises-h1">25 devises disponibles !</h2>
      <p className="devises-p">IFABIT offre la possibilité d'échanges, de ventes et
      d'achats de plusieurs produits. En dehors de cette
        possibilité, envoyer de l'argent vers d'autres
        réseaux est aussi possible.
      
      </p>
      <a href="" className="btn btn-guide">S'inscrire</a>
    </div>
    <div className='col-md-6'>
      <img src={moyen} className='img-fluid'/>
    </div>
  </div>
</div>

<div className="container py-5">
  <CarousselEchange />
</div>

{/* ==================================   Devises disponible FIN ==============================================*/} 
{/* ================================== Integrer notre API  début ==============================================*/} 


<div className='crypto container py-5'>
  <div className='row py-5 d-flex align-items-center'>
  
  <div className='col-md-6'>
      <img src={phoneAPI} className='img-fluid'/>
    </div>
    <div className='col-md-6'>
      <h2 className="devises-h1">Intégrer notre API comme module de payement !</h2>
      <p className="devises-p">Un module de payementsans redirection est intégrable
   sur votre plateforme afin de rendre l'expérience de
   paiement fluid.
  Nous vous fournissons une api pour exécuter vos
   requêtes et manipuler votre compte depuis votre
    propre systèmes.Les appels et les procédures
     sont tous documentés.
      
      </p>
      <a href="" className="btn btn-guide">S'inscrire</a>
    </div>
  </div>
</div>
{/* ==================================  Integrer notre API FIN ==============================================*/} 
{/* ================================== Commentaire  début ==============================================*/} 
      <div className="container py-5">
        <h2 className="commentaire-h1 text-center">
          Ce que nos utilisateurs pensent
          de nous !
        </h2>
        <div className="im-back container"></div>
        <div className="container row">
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          dots={false}
          showSides={true}
          sidesOpacity={1}
          sideSize={0.5}
          slidesToScroll={1}
          slidesToShow={2}
          scrollOnDevice={true}
          autoCycle={true}
          nextArrow={null}
          prevArrow={null}
          arrows={false}
          className="InfiniteCarousel"
        >
          <div className="container col-md-4 col-sm-4 col-lg-4 col-2">
              <div className="carde">
                <div className="card-body">
                  <div className="card-text">
                    <div className="div-star">
                      <FaStar className="icon-commentaire-star" />
                      <FaStar className="icon-commentaire-star" />
                      <FaStar className="icon-commentaire-star" />
                      <FaStar className="icon-commentaire-star" />
                      <FaStar className="icon-commentaire-star" />
                    </div>
                    <h3>Abdoul OUEDRAOGO</h3>
                    <p>
                      Avec la nouvelle application IFABit, vous trouverez la
                      crème des services financiers en une seule application.
                      IFABit, c'est plus de 50 plateformes de services
                      financiers en une seule. Le design et les services
                      intégrés ont été conçus pour vous offrir une meilleure
                      expérience utilisateur
                    </p>
                  </div>
                </div>
              </div>
              <div className="img-commentaire-div">
                <img src={computer} className="rounded-circle img-fluid  img-commentaire" />
              </div>  
          </div>
          <div className="container col-md-4 col-sm-4 col-lg-4 col-2">
              <div className="carde">
                <div className="card-body">
                  <div className="card-text">
                    <div className="div-star">
                      <FaStar className="icon-commentaire-star" />
                      <FaStar className="icon-commentaire-star" />
                      <FaStar className="icon-commentaire-star" />
                      <FaStar className="icon-commentaire-star" />
                      <FaStar className="icon-commentaire-star" />
                    </div>
                    <h3>Aimé LINGUE</h3>
                    <p>
                      Avec la nouvelle application IFABit, vous trouverez la
                      crème des services financiers en une seule application.
                      IFABit, c'est plus de 50 plateformes de services
                      financiers en une seule. Le design et les services
                      intégrés ont été conçus pour vous offrir une meilleure
                      expérience utilisateur
                    </p>
                  </div>
                </div>
              </div>
              <div className="img-commentaire-div">
                <img src={computer} className="rounded-circle img-fluid  img-commentaire" />
              </div>  
          </div>
          <div className="container col-md-4 col-sm-4 col-lg-4 col-2">
              <div className="carde">
                <div className="card-body">
                  <div className="card-text">
                    <div className="div-star">
                      <FaStar className="icon-commentaire-star" />
                      <FaStar className="icon-commentaire-star" />
                      <FaStar className="icon-commentaire-star" />
                      <FaStar className="icon-commentaire-star" />
                      <FaStar className="icon-commentaire-star" />
                    </div>
                    <h3>John DOE</h3>
                    <p>
                      Avec la nouvelle application IFABit, vous trouverez la
                      crème des services financiers en une seule application.
                      IFABit, c'est plus de 50 plateformes de services
                      financiers en une seule. Le design et les services
                      intégrés ont été conçus pour vous offrir une meilleure
                      expérience utilisateur
                    </p>
                  </div>
                </div>
              </div>
              <div className="img-commentaire-div">
                <img src={computer} className="rounded-circle img-fluid  img-commentaire" />
              </div>  
          </div>
        </InfiniteCarousel>
        </div>
      </div>
      {/* ================================== Commentaire  fin ==============================================*/} 
      {/* ================================== donwload  début ==============================================*/} 
      <div className="download">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <h2 className="txt-telecharger" >Télécharger l'app IFABIT</h2>
              <p className="bg-tertiaryColor">
                Avec la nouvelle application IFABit, vous trouverez la crème des
                services financiers en une seule application. IFABit, c'est plus
                de 50 plateformes de services financiers en une seule. Le design
                et les services intégrés ont été conçus pour vous offrir une
                meilleure expérience utilisateur.{" "}
                <strong>
                  Nous aimons nos clients et nos clients aiment nos services
                </strong>
              </p>
              <div className="row download-app">
                <div className="col-lg-6">
                  <a>
                    <img src={ios} className="img-fluid  img-andios" />
                  </a>
                </div>
                <div className="col-lg-6">
                  <a>
                    <img src={android} className="img-fluid img-andios" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 app-img animate__animated animate__fadeInRight">
              <img src={download} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
{/* ================================== donwload  fin ==============================================*/} 
      <Footer />
    </div>
  );
}

export default Home;
