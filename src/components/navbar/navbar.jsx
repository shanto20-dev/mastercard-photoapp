import React,{Component} from 'react';
import '../../styles/navbar.css'
import { Link } from 'react-router-dom';

class Navbar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='navbar-div'>
                <Link to='/'><h1>Photo Album App</h1></Link>
            </div>

        )

    }



}

export default Navbar