import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import contact from '../assets/img/contact.png'
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../assets/css/brokers.css";

function Contact(){
    const [boisson, setBoisson] = useState([]);

    useEffect(()=>{
        axios.get('http:127.0.0.1:5000/lafood')
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
    })
    return(
        <div>
        <Navbar />
            <div className='bg-ifa'>
                <div className='container py-5 text-center text-white'>
                    <h2 className='text-capitalize title text-center'>Contactez-nous</h2>
                </div>
            </div>
            <div className='container py-5'>
                <div className='row d-flex align-items-center'>
                    <div className='col-md-6 col-lg-6 col-sm-12 col-xs-12'>
                        <img src={contact} className='img-fluid' />
                    </div>
                    <div className='col-md-6 col-lg-6 col-sm-12 col-xs-12'>
                        <form method='post'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Nom</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="exemple@gmail.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div>
                                <button className='btn btn-partners'>Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;