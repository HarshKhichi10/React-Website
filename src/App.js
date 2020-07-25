import React from 'react';
import logo from './logo.svg';
import './App.css'
import HooksCollapsible from './components/HooksCollapsible';
import UseRef1 from './components/UseRef1';
import ClassTimerRef from './components/ClassTimerRef';
import UseRef2 from './components/UseRef2';
import SideBarCollapsible from './components/SideBarCollapsible';

function App() {
  return (
    <div className="App">
 { /* <ClassTimerRef/> 
  <UseRef2/>
   <HooksCollapsible/>   
*/ }


<SideBarCollapsible/>



     <button>Click</button>
     </div>
  );

}

export default App;
