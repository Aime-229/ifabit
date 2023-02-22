import React from "react";
import Navbar from "./Navbar";
import "../assets/css/business.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import phone37 from "../assets/images/Groupe37.png";
import { Helmet } from "react-helmet";
import paiement from "../assets/img/paiement.png";

function Business() {
  return (
    <div id="bg-business">
      <Helmet>
        <title>Offre de partenariat | IFABIT</title>
      </Helmet>
      <Navbar />
      <div className="bg-ifa">
        <div className="container py-5 text-center text-white">
          <h2 className="title text-center">
            Devenez partenaire et gagner de l'argent !
          </h2>
        </div>
      </div>
      <div className="container py-5">
        <h5 className="business-title-h5">
          Comment devenir partenaire de IFABIT ?
        </h5>
        <p id="paragraphe">
          Il n'y a rien de plus simple pour devenir partenaire de IFABit. Avant
          de devenir partenaire, vous devez avant tout disposer d'un compte
          standard vérifié. Les partenaires IFA sont des entités indépendantes
          et importantes dans le système IFA. C'est grâce à eux que les autres
          utilisateurs ont la possibilité d'effectuer des dépôts et des retraits
          sur leurs portefeuilles. Être partenaire signifie se donner les moyens
          d'être rémunéré par une commission sur chaque retrait effectué par nos
          utilisateurs sur votre portefeuille. On parle de retrait lorsqu'un
          utilisateur transfère des fonds vers un partenaire. Dans ce cas, une
          grille tarifaire différente de celle applicable sur les transferts
          directs entre utilisateurs est appliquée.
        </p>
        <div className="py-3">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <img src={phone37} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h5 className="business-title-h5 ">Gagner de l'argent</h5>
              <p id="paragraphe">
                Les partenaires reçoivent une commission sur les processus de
                retrait effectués à partir de leur compte. La commission leur
                est automatiquement reversée sans délai et ils ont la
                possibilité de retirer leur argent à tout moment
              </p>
            </div>
          </div>
        </div>
        <div className="py-3">
          <h5 className="business-title-h5">
            Conditions et liste des pièces à fournir !
          </h5>
          <div className="">
            <ul className="liste">
              <li>
                Fournir le dossier de demande (CNI/CIP, copie registre de
                commerce, IFU, preuve d’adresse)
              </li>
              <li>Remplir le contrat de demande</li>
              <li>Un plan de localisation géographique du local</li>
              <li>Etre âgé de 18 ans au 31 / 12 / 2022</li>
            </ul>
          </div>
        </div>
        <div className="py-3 text-center">
          <a
            className="btn "
            id="btn-partners"
            href="https://app.ifabit.com/auth/signup"
          >
            Devenir partenaire !
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Business;
