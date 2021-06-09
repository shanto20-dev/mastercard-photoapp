import React,{Component} from 'react';
import '../../styles/homepage.css'

class AlbumIndexItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render(){
        console.log(this.props);
        return(
            <li className="album-item">
                <h2>{this.props.album.title}</h2>
                <img className='album-cover' alt=""/>
                <p>Album owner:</p>
                <p>Email:</p>
                <p>Website: </p>

                <button>View Album</button>
            </li>
        )

    }


}

export default AlbumIndexItem