import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../Component/CardList'
import Header from '../Component/Header/_header'
import SearchBox from '../Component/Search/SearchBox';

import Scroll from '../Component/Scroll/Scroll'

import { setSearchField, requestRobots } from '../Actions/Actions';

// Title Of The App
const TITLE = 'Robot Friends'

/// maps

const mapStateToProps = (state) =>{
        return {
            searchField: state.searchRobots.searchField,
            robots: state.requestRobots.robots,
            isPending: state.requestRobots.isPending,
            error: state.requestRobots.error
        }
}

const mapDispatchToProps = (dispatch) =>{

        return {
            onsearchchange: (event) => dispatch(setSearchField(event.target.value)),
            onRequestRobots: () => dispatch(requestRobots())
        }
}

class App extends Component {

    componentDidMount(){

        this.props.onRequestRobots();

            /* Title of The App you can change it from above */

            document.title = `${ TITLE }`;
    }

// Old one
    // onsearchchange = (event) => {
        
    //     this.setState({searchfield: event.target.value})
    // }

    render(){

        const { searchField, onsearchchange, robots, isPending } = this.props;
        const filterrebots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return isPending ? 
        
        <h1> Loading ..... </h1> :
        (
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
