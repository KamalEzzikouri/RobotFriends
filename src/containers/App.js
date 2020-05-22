import React, { Component } from 'react';

import CardList from '../Component/CardList'
import Header from '../Component/Header/_header'
import SearchBox from '../Component/Search/SearchBox';

import Scroll from '../Component/Scroll/Scroll'

// import { robots } from './Component/robots'


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

    }

    onsearchchange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){

        const filterrebots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return(

            <div className='tc'>
                <Header />
                <SearchBox searchchange={this.onsearchchange}/>

                <Scroll>
                    
                <CardList  robots = {filterrebots}/>

                </Scroll>
            </div>
    
        );
    }
}

export default App;
