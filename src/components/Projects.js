import '../App.css';
import EmployeeManagement from '../images/employemanagement.png';
import Randomquote from '../images/Randomequote.png';
import Todo from '../images/Todo.png';
import {Link} from 'react-router-dom';
import Card from './Card';

function Projects()
{
    return <div className="projects">
        <div className='project-firsthalf'>
            <h3><Link to="/" className='links'>Chandrika Dalakoti</Link></h3>
            <h2 className='project-heading'>Projects.</h2>
        </div>
        <div className='project-secondhalf'>
            <Card projectname={'Random Quote Generator'} img={Randomquote} desc={'A simple react application used to generate random quotes from an API and display them on the screen with a button click.'}></Card>
            <Card projectname={'Employee Management System'} img={EmployeeManagement} desc={'A React-based Employee Management System that allows the Admin user to perform CURD operations on Employee data which is being fetched from JSON Server via the help of Axios.Skills used: 1- ReactJS 2- JSON (dummy data) 3- Axios 4- Material UI '}></Card>
            <Card projectname={'Todo List'} img={Todo} desc={'A simple React app having a basic ToDo list functionality, where you can add and delete tasks as per your needs.'}></Card>
        </div>
    </div>
}

export default Projects;