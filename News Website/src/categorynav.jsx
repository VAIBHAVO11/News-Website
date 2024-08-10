import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';

export default function Categorynav() {
  return (
    <>

      <div className="categorynav">

        <ul>
          <li><Link to="/" className="rlink">All</Link></li>
          <li><Link to="/Automobile" className="rlink">Automobile</Link></li>
          <li><Link to="/Business" className="rlink">Business</Link></li>
          <li><Link to="/Entertainment" className="rlink">Entertainment</Link></li>
          <li><Link to="/National" className="rlink">National</Link></li>
          <li><Link to="/Politics" className="rlink">Politics</Link></li>
          <li><Link to="/Science" className="rlink">Science</Link></li>
          <li><Link to="/Startup" className="rlink">Startup</Link></li>
          <li><Link to="/Technology" className="rlink">Technology</Link></li>
          <li><Link to="/World" className="rlink">World</Link></li>
        </ul>

      </div>

    </>
  )
}
