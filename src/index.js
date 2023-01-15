import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
  // <React.StrictMode>
  //   <Counters /> 
  // </React.StrictMode>
  //CONSOLE.LOG() will be done twice in strict mode bcs react double invokes everything to help catch errors
);

//PROPS VS STATE
//PROPS INCLUDES DATA WE GIVE TO COMPONENT (can't modify this input unless it's in the state)
//STATE INCLUDES DATA THAT IS LOCAL OR PRIVATE TO THAT COMPONENT (INTERNAL TO COMPONENT)


//LifeCycle Hooks - hook into certain moments of lifecycle components and do a thing

//Mounting Phase (methods in order) - constructor, render, componenetDidMount

//Update Phase - render, componentDidUpdate

//Unmount - componentWillUnmount
