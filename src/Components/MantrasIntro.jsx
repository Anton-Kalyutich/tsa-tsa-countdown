import React from 'react'
import '../styles/MantrasIntro.css'
// import Logo from '../assets/mala.png'

const MantrasIntro = () => {
  // const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  return (
    <div className="intro-container">
      <p className="intro_title">NRC STUPA OF COMPLETE VICTORY</p>
      {/* if you want to have an image uncomment below */}
      {/* <img src={Logo} alt="Logo" className="intro_image" /> */}
      <p className="intro_text">
        In September 2019,
        {' '}
        {<a href='https://lama-ole-nydahl.org/' target="_new">
          Lama Ole Nydahl
        </a>}{' '}
        announced the construction of the
        {' '}{<a href="https://www.diamondway.org/nrcstupa/" target="_new">
          NRC Stupa of Complete Victory
        </a>}: 
        “It will be a victory over everything negative, 
        a victory over things that nobody likes, mental disturbances, 
        and everything harmful."
        He has invited Nedo Kuchung Rinpoche of the Karma Kagyu lineage to oversee its building and inauguration.
      </p>
      <p className="intro_text">
        We need to produce approximately <strong>7000</strong> tsatsas,
        and many friends across the United States (and the world) have already volunteered to help.
        To coordinate this noble effort we're presenting this tsatsas countdown. Enjoy!
      </p>
    </div>
  )
}

export default MantrasIntro
