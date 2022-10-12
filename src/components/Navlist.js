import '../App.css';
import Arrow from '../arrow.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 

function Navlist()
{

    return <ul id="navlinks">
        <li><Link to='/about' className="link">About</Link><img className="arrow" src={Arrow}/></li>
        <li><Link to='/projects' className="link" >Projects</Link><img className="arrow" src={Arrow}/></li>
        <li><a className="link" href="https://github.com/chandrikadalakoti2" target="__blank">Github</a><img className="arrow" src={Arrow}/></li>
        <li><a className="link" href="https://www.linkedin.com/in/chandrika-dalakoti-35734015b/" target="__blank">LinkedIn</a><img className="arrow" src={Arrow}/></li>
        <li><a className="link" href="mailto:chandrikadalakoti2@gmail.com" target="__blank">Contact</a><img className="arrow" src={Arrow}/></li>
    </ul>
}


export default Navlist;