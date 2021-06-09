import React,{Component} from 'react';
import '../../styles/homepage.css';
import AlbumIndex from './album_index.jsx';
import Filter from './filter.jsx';



class Homepage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            albums: [],
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
                <div className='homepage-div'>
                    <div>
                        
                    </div>

                    <div className='album-list'>
                        <AlbumIndex
                            albums={this.state.albums}
                            users={this.state.users}
                        />
                    </div>

                    <div>
                        <Filter
                            users={this.state.users}
                        />
                    </div>
                </div>
            )
        }else{
            return null;
        }

    }


}

export default Homepage