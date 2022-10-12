
import '../App.css';

function Card(props){
    return <div className='card'>
                <img className='image' src={props.img}/>
                <div className='container'>
                    <h5 className='Proj-name'>{props.projectname}</h5>
                    <p className='Proj-desc'>{props.desc}</p>
                </div>    
           </div>;
}

export default Card;