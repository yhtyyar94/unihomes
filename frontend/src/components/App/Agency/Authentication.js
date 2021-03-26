import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios'

const isAuthenticated = async () => { 
  	  let token;
     await axios.post('http://localhost:5001/frontend', { 
          "token": "eyJhbGciOiJIUzI1NiJ9.a2ltMTIzNDVAZ21haWwuY29t.TH_y1UMDAOlNc_O01neq7QcPLO8n65WGDKijHGIu26I"
      }).then(res => {
        
        if(res.data.status === true) {
          token = true
        } else {
          token = false
        }
      }).catch(err => console.log(err))

      if(token) {
        return true
      } else {
        return false
      }

}


export default isAuthenticated
