// import React, { useState } from 'react'
// import axios from 'axios'

// const ImageUpload = () => {
//     const [image, setImage] = useState('');

//     const uploadHandler = (e) =>{
//         e.preventDefault()
//         const formData = new FormData()
//         formData.append('image',image)
//         axios.post(url, formData).then((res)=>{

//         })
//     }
//   return (
//     <div>
//       image
//       <input type='file' value={image} onChange={(e) => {
        
//         console.log(e.target.files)
//         setImage(e.target.files[0])
//       }} />
//       <button onSubmit={uploadHandler}>upload</button>
//     </div>
//   )
// }

// export default ImageUpload
