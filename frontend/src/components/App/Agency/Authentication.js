

import axios from 'axios'

const isAuthenticated = async () => { 

  const token = JSON.parse(localStorage.getItem('token'))

 return new Promise((resolve, reject) => {
  axios.post('http://localhost:5001/frontend', { 
    "token": token
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
