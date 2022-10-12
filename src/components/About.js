import { Link } from "react-router-dom";
import '../App.css';

function About(){
    return <div className="about-page">
        <div className="about">
            <h3><Link to="/" className='links'>Chandrika Dalakoti</Link></h3>
            <h2 className="about-text">About.</h2>
        </div>
        <div className="details">
            <div className="mydata">
                My name is Chandrika Dalakoti. Welcome to my portfolio.<br></br><br></br>
                Currently working for Credit Suisse Bank as Application Development Analyst at Accenture with 3+ years of revelant experience. I’m passionate about creating beautiful, intuitive interfaces and being on the cutting edge of software.<br></br><br></br>
                I have hands-on experience with HTML5, CSS3, JavaScript, Bootstrap4, SASS, JSON, jQuery, Python (Basics, Tkinter), ReactJS, MaterailUI.<br></br><br></br>
                I do have a great fascination for Web Development and learning even more of it gives me immense joy. Building small projects and modules for web is what I do to make my resume even better than yesterday.<br></br><br></br>
                Thanks for checking out my website! Feel free to contact me if you want to chat.<br></br><br></br>
            </div>
            <div className="dash"></div>
        </div>
    </div>
}

export default About;