import React,{Component} from 'react';
import '../../styles/homepage.css'
import AlbumIndexItem from './album_index_item'

class AlbumIndex extends Component{

    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render(){
        console.log(this.props.users);
        return(
            <>
            <h2>Album List</h2>
            <ul className="album-list">
                {this.props.albums.map((album, index) => {
                    return <AlbumIndexItem
                        key={index}
                        album={album}
                        users={this.props.users}
                        />
                })}
            </ul>
            </>
        )

    }


}

export default AlbumIndex