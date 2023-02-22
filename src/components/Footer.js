import React from "react";
import Footer_suit from "./footer-suite";
import "../assets/css/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { BiShieldQuarter } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { TbPlayerTrackNext } from "react-icons/tb";

import Moment from "moment";

function Footer() {
  const Year = Moment().format("Y");

  return (
    <div>
      <Footer_suit />

      <div className="wrapper container-Fluid">
        <div className="boite-tirets"></div>
          <div className="boite-center text-center d-flex align-items-center justify-content-center">
            <div className="mt-9" id="form-section">
              <h1 className="text-center">Rejoingnez-nous maintenant !</h1>
              <p className="text-center">
                Abonnez-vous pour recevoir toutes les actualités financières en temps réel.
              </p>
              <form method="" action="" className="text-center">
                <input
                  type="text"
                  name=""
                  placeholder="Email"
                  className="input-mail-footer form-control"
                />
                <input
                  type="submit"
                  name=""
                  className="input-btn-footer"
                  value="Envoyer"
                />
              </form>
            </div>
          </div>
        <div class="boite-haut">
          <div class="container-haut">
            <div class="row container-fluid">
              <div class="col-md-4 col-sm-2 col-lg-4 col-2">
                <div className="text-center">
                  <BiShieldQuarter fontSize={40} />
                </div>
                <h1 className="text-center mt-4 text-font-size-25">Opérations sécurisée</h1>
                <p className="text-center">
                  IFABIT protège les données transmises entre votre ordinateur
                  et ses serveurs et met un accent sur la sécurité de vos
                  données et de vos interactions.
                </p>
              </div>
              <div class="col-md-4 col-sm-2 col-lg-4 col-2 order-2">
                <div className="text-center">
                  <FiClock fontSize={40} />
                </div>
                <h1 className="text-center mt-4 text-font-size-25">Disponibilité 24h/24</h1>
                <p className="text-center">
                  Nous nous assurons que le service reste disponible 24h/24 avec
                  une équipe à votre écoute.
                </p>
              </div>
              <div class="col-md-4 col-sm-2 col-lg-4 col-2 order-3">
                <div className="text-center">
                  <TbPlayerTrackNext fontSize={40} />
                </div>
                <h1 className="text-center mt-4 text-font-size-25">Diversité et rapidité</h1>
                <p className="text-center">
                  Avec IFABIT, vous avez accès à un éventail de possibilités qui
                  peuvent accélérer votre activité professionnelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <hr className="footer-ligne" />
      </div>

      <div className="container col-md-12 col-sm-12 py-5">
        <div className="row footColor">
          <div className="col-lg-3 col-md-3 col-xl-3 mx-auto text-white">
            <br></br>
            <img src={logo} className="img-fluid" />
            <p className="footer-p">
              IFABIT, est une plateforme qui se présente comme une révolution
              dans le domaine des plateformes de change internationales, est une
              Startup de l’une des entreprises pionnières du secteur financier
              en Afrique Francophone.
            </p>
          </div>
          <div className="col-lg-2 col-md-2 col-xl-2 mx-auto">
            <h2 className="text-capitalize font-weight-bold text-white footer-h">
              Liens Utiles
            </h2>
            <br></br>
            <p className="footer-p">
              <a
                href="https://app.ifabit.com/"
                target="blank"
                className="footer-link"
              >
                Espace Client
              </a>
            </p>
            <p className="footer-p">
              <a
                href="https://app.ifabit.com/auth/signup"
                target="blank"
                className="footer-link"
              >
                S'inscrire
              </a>
            </p>
            <p className="footer-p">
              <NavLink to="/portefeuilles" className="footer-link">
                IFA Wallets
              </NavLink>
            </p>
            <p className="footer-p">
              <NavLink to="/brokers" className="footer-link">
                Brokers
              </NavLink>
            </p>
            <p className="footer-p">
              <NavLink to="/business" className="footer-link">
                Offres Business
              </NavLink>
            </p>
          </div>
          <div className="col-lg-2 col-md-3 col-xl-2">
            <h2 className="text-capitalize font-weight-bold text-white footer-h">
              Légales
            </h2>
            <br></br>
            <p className="footer-p">
              <NavLink to="/#faq" className="footer-link">
                FAQ
              </NavLink>
            </p>
            <p className="footer-p">
              <a
                href="https://app.ifabit.com/legal/cgu.htm"
                className="footer-link"
              >
                Conditions Générales d'utilisation
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-md-4 col-xl-3 mx-auto text-white">
            <h2 className="text-capitalize font-weight-bold footer-h">
              Nous joindre ?
            </h2>
            <br></br>
            <p className="footer-p">
              <FaPhoneAlt className="footer-icon phone" /> (+229) 96 73 35 34
            </p>
            <p className="footer-p">
              <FaEnvelope className="footer-icon envelopp" /> contact@ifabit.com
            </p>

            <p className=" reseau-socio">
              <a href="" className="reseau-socio ">
                <FaFacebookF className="footer-icon facebook" />
              </a>
              <a href="" className="reseau-socio  ">
                <FaTelegram className="footer-icon teleg" />
              </a>
              <a href="" className="reseau-socio ">
                <FaTwitter className="footer-icon twit" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="copyright py-2 d-flex align-items-center justify-content-center">
        <p className="text-center text-white footer-p">
          Copyright, <strong className="copyrigth">{Year}-IFABIT</strong>
        </p>
      </div>
    </div>
  );
}

export default Footer;
