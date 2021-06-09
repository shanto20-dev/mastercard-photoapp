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
        return(
            <>
            <h2>Album List</h2>
            <ul className="album-list">
                {this.props.albums.map((album, index) => {
                    return <AlbumIndexItem
                        key={index}
                        album={album}
                        />
                })}
            </ul>
            </>
        )

    }


}

export default AlbumIndex