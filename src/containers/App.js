import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../Component/CardList'
import Header from '../Component/Header/_header'
import SearchBox from '../Component/Search/SearchBox';

import Scroll from '../Component/Scroll/Scroll'

import { setSearchField } from '../Actions/Actions';


// Title Of The App
const TITLE = 'Robot Friends'

/// maps

const mapStateToProps = (state) =>{
        return {
            searchField: state.searchField
        }
}

const mapDispatchToProps = (dispatch) =>{

        return {
            onsearchchange: (event) => dispatch(setSearchField(event.target.value))
        }
}

class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: []
            // searchfield: ''
        }
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
            .then(users => this.setState({robots: users}))

            /* Title of The App you can change it from above */

            document.title = `${ TITLE }`;
    }

// Old one
    // onsearchchange = (event) => {
        
    //     this.setState({searchfield: event.target.value})
    // }

    render(){

        const { robots } = this.state;
        const { searchField, onsearchchange } = this.props;
        const filterrebots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return(

            <div>
                {/* <Helmet>
                    <title>{ TITLE }</title>
                </Helmet> */}
                <Header />
                <div className='tc'>
                    <SearchBox searchchange={onsearchchange}/>

                    <Scroll>
                        
                    <CardList  robots = {filterrebots}/>

                    </Scroll>
                </div>
            </div>
    
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
