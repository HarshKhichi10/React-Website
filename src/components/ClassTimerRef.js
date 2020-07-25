import React, { Component, useRef } from 'react'



class ClassTimerRef extends Component {
    
    interval
    constructor(props) {
        super(props)
    
        this.state = {
             timer : 0 
        }
    }
    
    
componentDidMount(){
  
    this.interval = setInterval(()=>{
   this.setState(prevState => ({timer : prevState.timer + 1}))
  }, 1000)
}    

componentWillUnmount(){
        
} 
 
render() {
   
    return (
            <div>
                Clear Interval - {this.state.timer}
              <button onClick={()=>clearInterval(this.interval)}>Clear</button> 

            </div>
        )
    }
}


export default ClassTimerRef