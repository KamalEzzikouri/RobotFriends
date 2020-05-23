import React, { Component } from 'react';

import CardList from '../Component/CardList'
import Header from '../Component/Header/_header'
import SearchBox from '../Component/Search/SearchBox';

import Scroll from '../Component/Scroll/Scroll'

// import { robots } from './Component/robots'

// Title Of The App
const TITLE = 'Robot Friends'

class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
            .then(users => this.setState({robots: users}))

            /* Title of The App you can change it from above */

            document.title = `${ TITLE }`;
    }

    onsearchchange = (event) => {
        
        this.setState({searchfield: event.target.value})
    }

    render(){

        const filterrebots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return(

            <div>
                {/* <Helmet>
                    <title>{ TITLE }</title>
                </Helmet> */}
                <Header />
                <div className='tc'>
                    <SearchBox searchchange={this.onsearchchange}/>

                    <Scroll>
                        
                    <CardList  robots = {filterrebots}/>

                    </Scroll>
                </div>
            </div>
    
        );
    }
}

export default App;
