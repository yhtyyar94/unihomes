

import axios from 'axios'

const isAuthenticated = async () => { 

  const token = JSON.parse(sessionStorage.getItem('token'))

 return new Promise((resolve, reject) => {
  axios.post('https://unilive-backend.herokuapp.com/frontend', { 
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
