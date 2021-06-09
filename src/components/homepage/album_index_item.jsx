import React,{Component} from 'react';
import '../../styles/homepage.css'

class AlbumIndexItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render(){
        let albumOwner = this.props.users[this.props.album.userId];
        console.log(albumOwner);
        return(
            <li className="album-item">
                <h2>{this.props.album.title}</h2>
                <img className='album-cover' alt=""/>
                <p>Album owner: {`${albumOwner.name}`}</p>
                <p>Email: {`${albumOwner.email}`}</p>
                <p>Website: {`${albumOwner.website}`}</p>

                <button>View Album</button>
            </li>
        )

    }


}

export default AlbumIndexItem