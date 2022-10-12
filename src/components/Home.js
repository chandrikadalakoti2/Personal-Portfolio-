import Navigation from './Navigation';
import MainContent from './MainContent';
import Navlist from './Navlist';
import Cloud from '../red.svg';
import GreenCloud from '../green.svg';
import './Home.css';

function Home(){
    return <div className='homepage'>  
        <img src={GreenCloud} alt="svg" id="upper-cloud"/>
        <img src={Cloud} alt="svg" id="lower-cloud"/>
        <Navigation/>
        <MainContent/>
        <Navlist/>
    </div>
}

export default Home;