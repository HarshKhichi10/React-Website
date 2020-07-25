import React, { Component, useRef } from 'react'
    
 class SideBarCollapsible extends Component {
     constructor(props) {
         super(props)
         this.ulref = React.createRef();
         this.state = {
              
            open: true,
            side: false
          }  
         
        
     }
    
 openslidebar =()=>{
        
            var ul= this.ulref.current
       
                   
             ul.style.transform = 'translateX(0px)'      
       
             this.setState({open: !this.state.open })       
             
     }  
  hometag =()=>{
    this.setState({ side: !this.state.side })
     
    
} 


    render() {
        return (
            <div>
              <button onClick={ ()=>this.openslidebar()}>
                  <div className="burger"> 
                     <div className={this.state.open ? null :'line1'}></div>  
                     <div className={this.state.open ? null : 'line2'}></div>  
                     <div className={this.state.open ? null :'line3'}></div>  
                    </div>
              </button>
                <div className={this.state.open ? "side-bar" : 'side-bar-active'} >
                    <ul className="ul-side" ref={this.ulref}>
                        
                         <li onClick={()=>this.hometag()} 
                            className={this.state.side ?'li-side-down' : 'li-side'}> Home 
                      
                              {this.state.side ? 
                       
                               <i className="fa fa-chevron-down" aria-hidden="true"></i> :
                        
                               <i className="fa fa-chevron-up" aria-hidden="true"></i> }
                                </li>
                              {this.state.side ?    <ul className='inner-home'> 
                               <li className='li-side-in'> Email </li>
                               <li className='li-side-in'> Password </li>
                               <li className='li-side-in'> settings </li>           
                               </ul> 
                             : null }   
                        
                        <li className='li-side'> Contact</li>
                        <li className='li-side'> Projects </li>
                        <li className='li-side'> About </li>
                             
                        </ul> 
                    
                    </div> 
            </div>
        )
    }
}
export default SideBarCollapsible