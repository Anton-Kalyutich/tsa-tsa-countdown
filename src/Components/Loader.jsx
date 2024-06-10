import React from 'react'
import '../styles/Loader.css'
import loaderImage from '../assets/tsatsa.png'

export default function Loader() {
  return (
    <div className="mala_loader">
      <img src={loaderImage} alt="Tsatsa" className="mala_image" />
    </div>
  )
}
