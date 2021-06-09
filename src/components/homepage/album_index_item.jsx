import React,{Component} from 'react';
import '../../styles/homepage.css'

class AlbumIndexItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            albumPhotos: []
        }
    }

    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.album.id}/photos/`)
            .then(response => response.json())
            .then(json => this.setState({albumPhotos: json}))
            .then( () => this.setState({thumbPhoto: this.state.albumPhotos[0].url}))
    }



    render(){
        let thumbPhoto = this.state.albumPhotos[0];
        let thumbUrl;
        thumbPhoto ? thumbUrl = thumbPhoto.thumbnailUrl : thumbUrl = 'https://via.placeholder.com/150'
        // this.state.albumPhotos ? thumbnail = this.state.albumPhotos[0].thumbnailUrl : thumbnail = 'https://via.placeholder.com/150';
        if (this.props.user){
            return(
                <li className="album-item">
                    <img className='album-cover' alt="" src={`${this.state.thumbPhoto}`}/>
                    <div className='album-item-info'>
                        <h2>{this.props.album.title}</h2>
                        <p>Album owner: {`${this.props.user.name}`}</p>
                        <p>Email: {`${this.props.user.email}`}</p>
                        <p>Website: {`${this.props.user.website}`}</p>
                        <button>View Album</button>
                    </div>
    
                </li>
            )
        }else{
            return null;
        }
    }


}

export default AlbumIndexItem