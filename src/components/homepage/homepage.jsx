import React,{Component} from 'react';


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
            .then(json => this.setState({photos: json}))

    }


    render(){
        console.log(this.state);
        return(
            <div>
                <h1>Homepage things</h1>
            </div>
        )

    }


}

export default Homepage