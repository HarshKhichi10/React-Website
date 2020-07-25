import React, { Component } from 'react'
import '../App.css'


class HooksCollapsible extends Component {
     constructor(props) {
         super(props)
            this.state ={
                open: false,
                
            }

     }



 handleChange = (e)=>{
       this.setState({open: !this.state.open} )   
      
    }   
     
   
    render() {
        return (
            <div>
            <button className="header" onClick ={(e)=>this.handleChange(e)}>click
            </button>    
                  
                  <div className="main-content">  {this.state.open ?   <div className='content'>  {<p className="main-content">Header dfjd</p> }   </div> : null} 
         
            </div>
           
          
            </div>
            )
    }
}
export default HooksCollapsible