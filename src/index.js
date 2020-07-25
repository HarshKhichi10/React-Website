import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header'
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation';
import './Navigation.css'
import Services from './Services';
import App from './App'


 { /*class App extends React.Component{

  render(){


    return(
          <div>
         <Navigation logotitle="React Projects"/>

        <Header title="Stylish PortFolio" button="Find out more"/>
        <Services/>
        </div>
    )
  }
}


*/}


ReactDOM.render(
  <React.StrictMode>
    <App/>
     </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
