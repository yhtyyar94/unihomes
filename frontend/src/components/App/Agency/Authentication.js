

import axios from 'axios'

const isAuthenticated = async () => { 
 return new Promise((resolve, reject) => {
  axios.post('http://localhost:5001/frontend', { 
    "token": "eyJhbGciOiJIUzI1NiJ9.a2ltMTIzNDVAZ21haWwuY29t.TH_y1UMDAOlNc_O01neq7QcPLO8n65WGDKijHGIu26I"
    }).then(res => {
      if(res.data.status === true) {
        resolve(true)
      } else {
        reject(false)
      }
    }).catch(err => err)


 }) 
}


export default isAuthenticated
