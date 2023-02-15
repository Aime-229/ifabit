import React from "react";
import { FaMoneyBillWave, FaPhoneAlt, FaLock } from "react-icons/fa";
import "../assets/css/about.css";
import logo from "../assets/img/logo.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ifaPay from "../assets/img/paiement.png";
import ifaEchange from "../assets/img/Transfert.png";
import ifaPhone from "../assets/img/IFAphone.png";
import { Helmet } from "react-helmet";
import Echanges from "./Echanges";

function About() {
  return (
    <div>
      <Helmet>
        <title>A propos de la plateforme | IFABIT</title>
      </Helmet>
      <Navbar />
      <div className="bg-ifa">
        <div className="container text-center text-white">
          <h2 className="text-uppercase title-about">Qui sommes - nous ?</h2>
          <p className="text-center">
            Révolutionner l'industrie des transactions numériques
          </p>
        </div>
      </div>
      <div className="about py-5">
        <div className="container">
          <p>
            IFABit, qui se présente comme une révolution dans le domaine des
            plateformes de change internationales, est une Startup de l’une des
            entreprises pionnières du secteur financier en Afrique Francophone ;
            entreprise enregistrée au RCCM : RB/ABC/13B101 depuis 2013. C’est
            une plateforme complète conçue par des professionnels, simple à
            utiliser et à parcourir.
          </p>
          <p>
            Vous y trouverez tout un écosystème de produits et de services qui
            permet aux clients de s'engager dans une économie décentralisée de
            diverses manières. La plateforme offre un large éventail de services
            financiers et surpasse la concurrence en termes de fiabilité et de
            rentabilité, car elle vous aide à réaliser des économies à court et
            à long terme. Adopter IFABit c’est se donner les moyens d’avoir tout
            en un.
          </p>
        </div>
        <div className="container py-5">
          <div className="text-center ">
            <h5 className="chiffre">01</h5>
            <div className="row d-flex align-items-center">
              <div className="col-md-4">
                <h2>IFA Exchange</h2>
                <p>
                  Ce service vous permet de pouvoir effectuer des achats, des
                  ventes et des échanges de cryptomonnaies sans oublier les
                  monnaies électroniques comme Perfect Money, Ifaxof, Ifausd,
                  Payeer et autres.
                </p>
                {/* <a
              className="btn btn-success text-uppercase py-2"
              href="https://frfbs.com/?ppk=FMISCapital"
            >
              voir le broker
            </a> */}
              </div>
              <div className="col-md-4 ">
                <div className="spinner-grow">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="spinner-grow">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="spinner-grow">.</div>
              </div>
              <div className="col-md-4">
                <img src={ifaEchange} className="img-fluid rounded-circle" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h5 className="chiffre">02</h5>
            <div className="row d-flex align-items-center">
              <div className="col-md-4">
                <img src={ifaPay} className="img-fluid rounded-circle" />
              </div>
              <div className="col-md-4 ">
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
              </div>
              <div className="col-md-4">
                <h2>IFA Pay</h2>
                <p>
                  Grâce à ce service, vous avez non seulement la possibilité
                  d'envoyer, de reçevoir des FCFA via votre portefeuille IFAXOF
                  mais aussi des USD via le portefeuille IFAUSD.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h5 className="chiffre">03</h5>
            <div className="row d-flex align-items-center">
              <div className="col-md-4">
                <h2>IFA Money</h2>
                <p>
                  Ce service vous permet de pouvoir éffectuer des achats, des
                  ventes et des échanges de cryptomonnaies sans oublier les
                  monnaies électroniques comme Perfect Money, Ifaxof, Ifausd,
                  Payeer et autres.
                </p>
              </div>
              <div className="col-md-4 ">
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
                <div className="">.</div>
              </div>
              <div className="col-md-4">
                <img src={ifaPhone} className="img-fluid rounded-circle" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a className="btn text-uppercase" id="btn-partners" href="">
            commencer maintenant !
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
