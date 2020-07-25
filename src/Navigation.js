import React, { Component } from 'react'
import './Navigation.css'


 class Navigation extends Component {
    
    render() {
    const section =['Home', 'About','Services','Portfolio','Contact']
    const navlinks = section.map((section)=>{
        return(
            <li><a href={'#' + section } >{section}</a></li>
        )
    })    
    
        return (
            <div>
                
                <nav>
                     <h2 className="logo">  {this.props.logotitle} </h2>
                        <ul> 
                        {navlinks}
                      </ul>
                
                </nav>
             
            </div>
        )
    }
}
export default Navigation