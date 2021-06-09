import React,{Component} from 'react';
import '../../styles/gallery.css';
import GalleryIndex from './gallery_index.jsx';

class Gallery extends Component{

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            album: {},
            currentPhoto: 0
        }

        this.prevPhoto = this.prevPhoto.bind(this);
        this.nextPhoto = this.nextPhoto.bind(this);
    }


    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => this.setState({album: json}))

        fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.match.params.id}/photos`)
            .then(response => response.json())
            .then(json => this.setState({photos: json}));
    }

    prevPhoto(){
        if (this.state.currentPhoto > 0){
            this.setState({currentPhoto: this.state.currentPhoto - 1})
        }else{
            this.setState({currentPhoto: this.state.photos.length - 1})
        }
    }

    nextPhoto(){
        if (this.state.currentPhoto >= this.state.photos.length - 1){
            this.setState({currentPhoto: 0})
        }else{
            this.setState({currentPhoto: this.state.currentPhoto + 1})
        }
    }


    render(){
            if (this.state.photos[this.state.currentPhoto]){
                return(
                    <>
                    <h2>{this.state.album.title}</h2>
                    <div className='gallery-section'>
                        <div className='main-display'>
                            <button className='prev-button' onClick={this.prevPhoto}>Previous Photo</button>
                            <div className='main-photo-info'>
                                <img className='gallery-main' alt="" src={`${this.state.photos[this.state.currentPhoto].url}`}/>
                                <h3>{this.state.photos[this.state.currentPhoto].title}</h3>
                            </div>
                            <button onClick={this.nextPhoto}>Next Photo</button>
                        </div>
    
                        <GalleryIndex
                            photos={this.state.photos}
                            currentPhoto={this.state.currentPhoto}
                        />
    
                    </div>
                    </>
                )
            }else{
                return null;
            }
    }

}

export default Gallery