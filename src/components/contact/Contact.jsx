import React from 'react'
import './contact.css'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

function Contact() {
  return (
    <section id='contact'>
      <h5>Ich freue mich über eure Nachricht</h5>
      <h2>Kontakt</h2>
      <div className='container contact__container'>
        <article className='shortcontact__content'>
          <BsTelephone className='contact__icon'/>
          <div className='details'>
          <h4>Ruf mich an</h4>
            <a href="tel: 0788263108"><small>078 826 31 08</small></a>
          </div>
        </article>
        <article className='shortcontact__content'>
          <HiOutlineMail className='contact__icon'/>
          <div className='details'>
          <h4>Schreib mir</h4>
            <a href="mailto: elibox@gmx.ch?subject=Bewerbung_Elias&body=Gratulation!%20Sie%20haben%20den%20Job!%20;-)"><small>elibox@gmx.ch</small></a>
          </div>
        </article>
        </div>
      
  
      
    </section>
  )
}

export default Contact