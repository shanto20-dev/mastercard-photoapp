import React,{Component} from 'react';
import '../../styles/homepage.css'

class AlbumIndexItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render(){
        if (this.props.user){
            return(
                <li className="album-item">
                    <h2>{this.props.album.title}</h2>
                    <img className='album-cover' alt=""/>
                    <p>Album owner: {`${this.props.user.name}`}</p>
                    <p>Email: {`${this.props.user.email}`}</p>
                    <p>Website: {`${this.props.user.website}`}</p>
    
                    <button>View Album</button>
                </li>
            )
        }else{
            return null;
        }
    }


}

export default AlbumIndexItem