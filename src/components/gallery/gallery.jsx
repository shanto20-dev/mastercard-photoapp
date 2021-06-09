import React,{Component} from 'react';
import '../../styles/gallery.css';

class Gallery extends Component{

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            album: {},
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
            console.log(this.state);
            return(
                <>
                <div>
                    <h1 className='welcome-title'>Welcome to Mastercard PhotoApp!</h1>
                </div>

                <div className='album-list'>

                </div>
                </>
            )

    }

}

export default Gallery