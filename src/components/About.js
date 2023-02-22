import React from "react";
import "../assets/css/about.css";
import logo from "../assets/img/logo.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ifaPay from "../assets/images/ifapay.png";
import ifaEchange from "../assets/images/Groupe68.png";
import ifaPhone from "../assets/images/Groupe80.png";
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
      <div className=" py-5">
        <div className="container">
          <p>
            IFABit se présente comme une révolution dans le domaine des
            plateformes d'échange internationales. Cette startup appartient à
            l'une des entreprises pionnières du secteur financier en Afrique
            francophone, enregistrée au RCCM sous le numéro RB/ABC/13B101 depuis
            2013. IFABit est une plateforme complète, conçue par des
            professionnels pour être simple à utiliser et à naviguer.
          </p>
          <p>
            Vous trouverez sur IFABit tout un écosystème de produits et de
            services qui permet aux clients de s'engager dans une économie
            décentralisée de diverses manières. Cette plateforme offre un large
            éventail de services financiers et surpasse la concurrence en termes
            de fiabilité et de rentabilité, car elle vous aide à réaliser des
            économies à court et à long terme. Adopter IFABit, c'est opter pour
            une solution tout-en-un pour vos besoins financiers.
          </p>
        </div>
        <div className="container py-5">
          <div className="text-center ">
            <h5 className="chiffre">01</h5>
            <div className="row d-flex align-items-center">
              <div className="col-md-4">
                <h2>IFA Wallets</h2>
                <p>
                  Un service qui vous permet d'acheter, de vendre et d'échanger
                  des cryptomonnaies ainsi que les monnaies électroniques telles
                  que perfect money de manière rapide, sécurisée et discrète.
                  Deux options : retirer vos avoirs auprès de nos partenaires
                  sans dépendre d'un réseau local et en toute sécurité, ou
                  retirer via le réseau de votre choix, moyennant les frais de
                  retrait du réseau.
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
                <img src={ifaEchange} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h5 className="chiffre">02</h5>
            <div className="row d-flex align-items-center">
              <div className="col-md-4">
                <img src={ifaPay} className="img-fluid " />
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
                  Que vous ayez un commerce physique ou en ligne, profitez de la
                  puissance de la blockchain en intégrant notre agrégateur de
                  paiement de nouvelle génération. Grâce à notre service IFA
                  Pay, vous pouvez recevoir des paiements en FCFA de tous les
                  pays du monde, sans être exposé aux fluctuations des
                  cryptomonnaies. Ce service est gratuit pour soutenir votre
                  commerce, et il n'y a aucun frais pour les encaissements ou
                  les décaissements. Cependant, des frais de 1% s'appliquent
                  pour toutes les demandes de retrait.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h5 className="chiffre">03</h5>
            <div className="row d-flex align-items-center">
              <div className="col-md-4 ">
                <h2>IFA Money</h2>
                <p>
                  Nous facilitons toutes les transactions financières
                  internationales grâce à ce service. Vous n'aurez plus aucune
                  raison de ne pas envoyer ou recevoir de l'argent de vos
                  proches, car nous offrons des transferts instantanés à des
                  coûts très compétitifs. En résumé : Envois gratuits, Dépôts
                  gratuits, Retraits presque gratuits.
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
                <img src={ifaPhone} className="img-fluid " />
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
