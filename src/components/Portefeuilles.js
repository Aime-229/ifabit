import React from "react";
import Navbar from "./Navbar";
import "../assets/css/portefeuilles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import groupe37 from "../assets/images/Groupe37.png";
import groupe72 from "../assets/images/Groupe72.png";
import { Helmet } from "react-helmet";

function Portefeuilles() {
  return (
    <div>
      <Helmet>
        <title>Les portefeuilles IFA | IFABIT</title>
      </Helmet>
      <Navbar />
      <div className="bg-ifa col-sm-12 col-md-12 col-lg-12 col-xxl-12">
        <div className="container py-5 text-white">
          <h2 className="text-capitalize text-center">Nos Portefeuilles</h2>
          <p className="text-center">
            ifaBit fournit à l'interne deux types de portefeuilles !
          </p>
        </div>
      </div>
      <div class="container ifa-usd">
        <div class="row">
          <div class="col-md col-portfeuille1">
            <img
              src={groupe37}
              class="rounded float-left"
              alt="..."
              className="img-ifa-left"
            />
            <div className="contenu-left">
              <h1 className="contenu-left-h1">ifa XOF</h1>
              <p className="contenu-left-p">
              Les IFA XOF sont des devises détenues dans les portefeuilles en X et représentant vos avoirs en FCFA.
              </p>
            </div>
          </div>
          <div class="col-md col-portfeuille2">
            <div className="contenu-right">
              <h1 className="">ifa USD</h1>
              <p className="contenu-right-p">
              Les IFA USD sont des devises détenues dans les portefeuilles en U et représentant vos avoirs en dollar américain.
              </p>
            </div>
            <img
              src={groupe72}
              class="rounded float-right"
              alt="..."
              className="img-ifa-right"
            />
          </div>
        </div>
      </div>
      {/* TEXT EN BAS Début */}
      <div className="container">
        <div>
          <p className="text-center">
            À partir de vos portefeuilles, vous pouvez envoyer des fonds à
            d'autres personnes, effectuer des paiements et/ou souscrire à des
            services. Les transferts effectués via ces portefeuilles peuvent
            générer des couts de transactions.
          </p>
        </div>
        <div>
          <p className="text-center">
            Pour effectuer un dépôt ou un retrait sur ces portefeuilles, vous
            avez la possibilité de contacter un partenaire IFA le plus proche de
            vous. Si les swaps sont disponibles sur nos portefeuilles, vous
            pouvez procéder à vos retraits de fonds via le réseau de votre
            choix.
          </p>
        </div>
        <h2 className="business-title-h5 text-center">
          Chaque utilisateur a droit à un maximum de trois portefeuilles.
        </h2>
        <p className="text-center">
          Il n'est pas possible de transférer des fonds entre les deux types de
          portefeuilles sans passer par un swap, si cette option est disponible
          au moment de la demande.
        </p>
        <div className="text-center">
          <a href="" className="btn btn-partners">
            Commencer maintenant !
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portefeuilles;
