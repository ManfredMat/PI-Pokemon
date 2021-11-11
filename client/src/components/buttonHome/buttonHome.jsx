import { Link } from 'react-router-dom';
import './buttonHome.css';

export default function ButtonHome(){
    return(
        <Link to='/pokemain' className="linkHome">
        <h1 className="homeButton">Gotta Catch'em All</h1>
        </Link>
    )
}