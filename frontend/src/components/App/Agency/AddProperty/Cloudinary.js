import axios from 'axios'
import React, { useState } from 'react'

const Cloudinary = () => {
    const [images, setImages] = useState([])
	const imageURLs =[]

    const uploadImage = async () => {
        console.log(images)
        

      for (let i = 0; i < images.length; i++) {
        const formsData = new FormData()
        formsData.append('file', images[i])
        formsData.append('upload_preset', 'aaesgzrz')
        await axios.post('https://api.cloudinary.com/v1_1/blackeagle4894/image/upload', formsData).then(res => imageURLs.push(res.data.url)).catch(err => console.log(err))
    }
    }

    return (
        <div>
            <input type="file" onChange={e => setImages(e.target.files)} multiple/>
            <button onClick={uploadImage}>Upload</button>
        </div>
    )
}

export default Cloudinary
