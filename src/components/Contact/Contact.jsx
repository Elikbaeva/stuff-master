import React from 'react'
import styles from '../../styles/Contact.css'

export default function Contact() {
    return (
        <div>
            <div className='contact'>Contact US</div>
            <div className='contact_info'>We would love to hear from you! I
                f you have any questions, feedback, or inquiries, please feel free to reach out to us.</div>
            <div className="contact_text">
                <div className='contact_phone'>Phone:<a class="Tel"
                    target="_blank" rel="noreferrer" href="tel:  +996 554 495 095">+996 554 495 095</a></div>
                <div className='contact_phone'>Email: <a class="Tel" target="_blank"
                    rel="noreferrer" href="mailto:elikbaevasedep77@gmail.com">elikbaevasedep77@gmail.com</a></div>
                <div className='contact_phone'>Address: 1 Esenina, Karakol, Kyrgyzstan</div>
            </div>
            <h3 class="contact-subheading">Store Hours</h3>
            <p class="contact-hours">Our store is open from Monday to Friday, from 9:00 AM to
             6:00 PM. Feel free to visit us during these hours to explore our latest Nike products.</p>
        </div>
    )
}
