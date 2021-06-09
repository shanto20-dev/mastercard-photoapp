import React,{Component} from 'react';
import '../../styles/gallery.css';

class Gallery extends Component{

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            users: {}
        }
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums/')
            .then(response => response.json())
            .then(json => this.setState({albums: json}))

        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(json => {
                let usersObject =  {}
                json.forEach(user => {
                    usersObject[user.id] = user;
                })
                this.setState({users: usersObject})
            });
    }


    render(){
        if (this.state.users){
            return(
                <>
                <div>
                    <h1 className='welcome-title'>Welcome to Mastercard PhotoApp!</h1>
                </div>

                <div className='album-list'>
                    <AlbumIndex
                        albums={this.state.albums}
                        users={this.state.users}
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