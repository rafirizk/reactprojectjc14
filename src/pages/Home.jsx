import React, { Component } from 'react'
import BGPicture from '../assets/backgroundHome.jpg'

const Background = {
    backgroundImage: 'url(' + BGPicture + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
    width: '100%'
}

class Home extends Component {
    state = { }

    render() {


        return (
            <div>
                <div className='jumbotron' style={Background}>
                    <h1>ASD</h1>
                </div>
                <div className='container'>
                    <h1>ASD</h1>
                </div>
            </div>
        )
    }
}

export default Home