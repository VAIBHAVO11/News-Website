import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';


export default function Footer() {
  return (
    <>

      <div className="footer">

        <div className="box">
          <h3>Quick link</h3>
          <a href="#">Home</a>
          {/* <a href="#">About us</a> */}
        </div>

        <div className="box">
          <h3>Contact us</h3>
          <a href="#"><FontAwesomeIcon icon={faPhone} /> +91 0123456789</a>
          <a href="#"><FontAwesomeIcon icon={faPhone} /> +91 9876543210</a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} /> news.portal@gmail.com</a>
        </div>

        <div className="vbox">
          <h3>Most viwed</h3>
          <ul>
            <li><Link to="/Science" className="rlink">Science</Link></li>
            <li><Link to="/Startup" className="rlink">Startup</Link></li>
            <li><Link to="/Technology" className="rlink">Technology</Link></li>
            <li><Link to="/World" className="rlink">World</Link></li>
          </ul>
        </div>

      </div>

      <div class="share">
        <div className="ibox">
          <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
        </div>
        <div className="ibox">
          <a href=""><FontAwesomeIcon icon={faXTwitter} /></a>
        </div>
        <div className="ibox">
          <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className="ibox">
          <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
        <div className="ibox">
          <a href=""><FontAwesomeIcon icon={faPinterest} /></a>
        </div>

      </div>

    </>
  )
}
