import React,{Component} from 'react';
import '../../styles/homepage.css'


class GalleryIndex extends Component{

    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render(){
        if (this.props.photos){
            return(
                <>
                <ul className="photo-list">
                    {this.props.photos.map((photo, idx) => {
                        let selected = ''
                        if (this.props.currentPhoto === idx){
                            selected = ' selected'
                        }
                        return (
                        <li className="photoItem">
                            <img className={`gallery-thumb${selected}`} src={`${photo.url}`} alt="" onClick={this.songAction}/>
                        </li>)
                    })}
                </ul>
                </>
            )
        }else{
            return null;
        }

    }


}

export default GalleryIndex