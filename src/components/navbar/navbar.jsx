import React,{Component} from 'react';
import '../../styles/navbar.css'

class Navbar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='navbar-div'>
                <h1>Photo Album App</h1>
            </div>

        )

    }



}

export default Navbar