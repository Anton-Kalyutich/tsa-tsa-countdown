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
      {/* <p className="intro_text">
        Whether you do a formal Guru Yoga session or are doing mantras while
        walking in the park...if you are dedicating them to{' '}
        <a href="https://www.diamondway.org/your-project/" target="_new">
          -- NAME OF THE PROJECT --
        </a>
        , make that wish and simply count them and make a record of it. Then
        input the number of mantras in the form below. Again, you do not have to
        do a formal sitting session in order to count your Karmapa Chenno
        mantras. Formal sessions on the 16th Karmapa in your local center are
        recommended as well. We wish to keep this project ongoing throughout
        2021 and see how soon we can accomplish <b>-- NUMBER OF MANTRAS--</b>.
        Primarily we wish to build up Karmapa&apos;s power-field and establish
        the finest conditions for the this project&apos;s success.
      </p> */}
    </div>
  )
}

export default MantrasIntro
