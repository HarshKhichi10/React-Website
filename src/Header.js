import React, { Component } from 'react'
import myimage from './myimage1.jpg'
import './Header.css'
 class Header extends Component {
    
     
    render() {
        const mystyles = {
         
            'background':`url( ${myimage} )`,
            'height': '50vh',
            'backgroundSize' : 'cover'   
        }  
        return (
          <div>

                <header style={mystyles}>

                    <h1> {this.props.title} </h1>  
                    <p> A Free Bootstrap Theme by Sfart Bootstrap </p>                   
                    <a href ="#button" >{this.props.button} </a>               
                </header>
            </div>
        )
    }
}

export default Header