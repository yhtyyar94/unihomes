import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


const isAuthenticated = () => { 
  	  const token = localStorage.getItem('token');
  try {
    if(token){
      return true;
    }
    else{
      return false;
    }
  } catch (error) {
    return false;
  }
}


export default isAuthenticated
