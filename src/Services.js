import React, { Component } from 'react'
import './Services.css'

class Services extends Component {
    render() {
        return (
            <div className="services">
                <h3>Services</h3> 
                <h2> What We Offer </h2>
                 <div className='row'>
                  <Icon myicon ={iconobj[0].icon} mytitle={iconobj[0].title}  mydescription={iconobj[0].description}/>
                  <Icon myicon ={iconobj[1].icon} mytitle={iconobj[1].title}  mydescription={iconobj[1].description}/>
                  <Icon myicon ={iconobj[2].icon} mytitle={iconobj[2].title}  mydescription={iconobj[2].description}/>
                  <Icon myicon ={iconobj[3].icon} mytitle={iconobj[3].title}  mydescription={iconobj[3].description}/>
                
                </div> 
                    
            </div>
        )
    }

}


const iconobj=[
    {
        icon :<ion-icon name="phone-portrait-outline"></ion-icon>,
        title:'Responsive',
        description : 'Looks great on any screen size!'       
    },
    {
        icon:  <ion-icon name="pencil-outline"></ion-icon>,
        title:'Resigned',
        description : 'Freshly Redisgned for Bootstrap 4'       
    },
    {
        icon:  <ion-icon name="thumbs-up-outline"></ion-icon>,
        title:'Favorited ',
        description : 'Millons of users <ion-icon name="heart-outline"></ion-icon> Start Bootstrap!'       
    },
    {
        icon:   <ion-icon name="help-outline"></ion-icon>,
        title:'Questions',
        description : 'I miscache you a question'       
    },
]
class Icon extends Component {

    render(){
        return(

           <div> 

               <span >

                   {this.props.myicon}
               </span>
                <h4> {this.props.mytitle}</h4>
                <p> {this.props.mydescription}</p> 

           </div> 
 



        )
    }
}

export default Services