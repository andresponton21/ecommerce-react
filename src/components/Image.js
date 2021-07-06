import React, {useState} from 'react'
import noImg from 'img/noproduct.jpg'

const Image = ({src, alt, ...attr}) => {

  // State will hold the image url
  const [img, setImg] = useState(``)
  import(`img/${src}.jpg`).then((image) => setImg(image.default) )
  
  return (
    <img src={(img) ? img : noImg} alt={alt} {...attr} />
  )
}

export default Image