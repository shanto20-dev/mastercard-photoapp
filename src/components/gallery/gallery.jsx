import React,{Component} from 'react';
import '../../styles/gallery.css';

class Gallery extends Component{

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            album: {},
            currentPhoto: 0
        }
    }


    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => this.setState({album: json}))

        fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.match.params.id}/photos`)
            .then(response => response.json())
            .then(json => this.setState({photos: json}));
    }


    render(){
            if (this.state.photos[this.state.currentPhoto]){
                return(
                    <>
                    <h2>{this.state.album.title}</h2>
                    <div className='gallery-section'>
                        <div className='main-display'>
                            <button className='prev-button'>Previous Photo</button>
                            <div className='main-photo-info'>
                                <img className='gallery-main' alt="" src={`${this.state.photos[this.state.currentPhoto].url}`}/>
                                <h3>{this.state.photos[this.state.currentPhoto].title}</h3>
                            </div>
                            <button>Next Photo</button>
                        </div>
    
                        {/* <GalleryIndex/> */}
    
                    </div>
                    </>
                )
            }else{
                return null;
            }
    }

}

export default Gallery