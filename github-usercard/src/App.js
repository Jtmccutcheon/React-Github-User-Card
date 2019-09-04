import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import GitUserCard from './GitUserCard'
import FollowersCards from './FollowersCards'
import styled from 'styled-components'


class App extends Component {

    state = {
        githubcard: [],
        followerscards: []
    };

    componentDidMount() {
        axios
            .get('https://api.github.com/users/jtmccutcheon')
            .then(response => {
                console.log(response.data)
                this.setState({ githubcard: response.data })
                axios
                    .get('https://api.github.com/users/jtmccutcheon/followers')
                    .then(res => {
                        console.log(res.data)
                        this.setState({ followerscards: res.data })
                    })
                    .catch(errror => {
                        console.log('error')
                    })
            })
            .catch(errror => {
                console.log('error')
            })

    }

    // componentDidUpdate() {
    //   console.log(this.state)
    // }

    render() {
        return (
            <div className='App'>
                <GitUserCard gitinfo={this.state.githubcard} />
                <FollowersCards followersinfo={this.state.followerscards} />
            </div>
        )
    }
};



export default App


