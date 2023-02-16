import React from 'react';
import Navbar from './Navbar';
import '../assets/css/business.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import {Helmet} from 'react-helmet';
import paiement from '../assets/img/paiement.png';



function Business () {
   
    return(
        <div id='bg-business'>
        <Helmet>
            <title>Offre de partenariat | IFABIT</title>
        </Helmet>
            <Navbar />
                <div className='bg-ifa'>
                    <div className='container py-5 text-center text-white'>
                        <h2 className='title text-center'>Devenez partenaire et <br></br>gagner de l'argent !</h2>
                    </div>
                </div>
                <div className='container py-5'>
                <h5 className='business-title-h5'>Comment devenir partenaire de IFABIT ?</h5>
                    <p id='paragraphe'>Il n'y a rien de plus simple pour devenir partenaire de IFABit.
                        Avant d'être partenaire, vous devez avant tout disposer d'un compte standard vérifié Les partenaires IFA sont les entités indépendantes et importantes dans le système IFA.
                        C'est par eux que les autres utilisateurs auront la possibilité d'effectuer les dépôts et retraits sur leurs portefeuilles.
                        Etre partenaire, c'est se donner les moyens d'être rémunéré par une commission sur chaque retrait effectué par nos utilisateurs sur votre portefeuille.
                        On parle de retrait lorsqu'un utilisateur transfère des fonds vers un partenaire. Et dans ce cas, une grille tarifaire différente de celle applicable sur les transferts directs (entre utilisateur) est appliquée.
                    </p>
                    <div className='py-3'>
                        <div className='row d-flex align-items-center'>
                            <div className='col-md-6'>
                                <img src={paiement} className ='img-fluid' />
                            </div>
                            <div className='col-md-6'>
                            <h5 className='business-title-h5 '>Gagner de l'argent</h5>
                                <p id='paragraphe'>Les partenaires gagnent une commission sur les processus de retraits opérés sur leur compte.
                                La commission leur est automatiquement reversée, sans latence et la possibilité de retrait actée.</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-3'>
                    <h5 className='business-title-h5'>Conditions et liste des pièces à fournir !</h5>
                        <div className=''>
                            <ul className='liste'>
                                <li>Se constituer en société, établissement ou ONG</li>
                                <li>Fournir le dossier de demande (CNI/CIP, copie registre de commerce, IFU, preuve d’adresse)</li>
                                <li>Remplir le contrat de demande</li>
                                <li>Un plan de localisation géographique du local</li>
                                <li>Posséder un local physique et identifiable.</li>
                                <li>Faire un dépôt initial de 100.000 FCFA</li>
                                <li>Etre âgé de 25 ans au 31 / 12 / 2021</li>
                            </ul>
                        </div>
                    </div>
                    <div className='py-3 text-center'>
                        <a className='btn ' id='btn-partners' href='https://app.ifabit.com/auth/signup' >Devenir partenaire !</a>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Business ;