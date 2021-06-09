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
        if (this.props.users){
            return(
                <>
                <ul className="album-list">
                    {this.props.albums.map((album, index) => {
                        return <AlbumIndexItem
                            key={index}
                            album={album}
                            user={this.props.users[album.userId]}
                            />
                    })}
                </ul>
                </>
            )
        }else{
            return null;
        }

    }


}

export default AlbumIndex