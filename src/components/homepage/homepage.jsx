import React,{Component} from 'react';
import '../../styles/homepage.css';
import AlbumIndex from './album_index.jsx';

class Homepage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            albums: []
        }
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums/')
            .then(response => response.json())
            .then(json => this.setState({albums: json}))

    }


    render(){
        console.log(this.state.albums);
        return(
            <>
            <div>
                <h1 className='welcome-title'>Welcome to Mastercard PhotoApp!</h1>
            </div>

            <div>
                <AlbumIndex
                    albums={this.state.albums}
                />
            </div>
            </>
        )

    }


}

export default Homepage