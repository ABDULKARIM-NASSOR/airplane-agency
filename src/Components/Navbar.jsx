import {faPlane} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

export function Navbar() {
 return(
    <>
    <nav className="navbar">
        <FontAwesomeIcon icon={faPlane} className="plane-icon"/>
        <ul className="nav-links">    
       <a href="#"><li>Home</li></a>
        <a href="#"><li>Flight
            <ul
            className="dropdown">
                <li>Schedules</li>
                <li>Offers</li>
            </ul>
            </li></a>
         <a href="#"><li>Services
          <ul className="dropdown">
            <li>Hotel</li>
            <li>Car Rental</li>
            <li>Tours</li>
          </ul>  
            </li></a>
          <a href="#"><li>Book</li></a>
           <a href="#"><li>Contact</li></a>
        </ul>
        <FontAwesomeIcon icon={faUser} className="user-icon"/>
    </nav>
    </>
 )
}