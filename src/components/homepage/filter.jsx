import React,{Component} from 'react';
import '../../styles/homepage.css'

class Filter extends Component{

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(json => this.setState({users: json}));
    }



    render(){
        if (this.state.users){
            return(
                <div className='filter-div'>
                <h3>Filter Albums (Coming Soon)</h3>
                <ul className="album-list">
                    {this.state.users.map((user, index) => {
                        return (
                            <li>
                                <p>{user.name}</p>
                            </li>
                        )
                    })}
                </ul>
                </div>
            )
        }else{
            return null;
        }

    }


}

export default Filter