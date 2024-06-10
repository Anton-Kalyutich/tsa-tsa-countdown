import React, { useState, useEffect } from 'react';
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import Header from './Components/Header.jsx';
import TsatsasAmount from './Components/TsatsasAmount.jsx';
import TsatsasForm from './Components/TsatsasForm.jsx';
import './styles/App.css';
import MantrasIntro from './Components/MantrasIntro.jsx';
import Footer from './Components/Footer.jsx';
import Loader from './Components/Loader.jsx';

// Loading Component is not showing in the beginning
// Fix Mantras Form

function App() {
  const [allTsatsas, setAllTsatsas] = useState({})
  const [inputNumber, setInputNumber] = useState()
  const [selectedType, setSelectedType] = useState()
  const [mode, setMode] = useState()

  const { width, height } = useWindowSize();

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(process.env.REACT_APP_AWS_DYNAMODB_URI)
        const resJson = await response.json()

        setAllTsatsas({
          bigStupa: resJson[0].bigStupa,
          smallStupa: resJson[0].smallStupa,
          tinyStupa: resJson[0].tinyStupa,
          longLife: resJson[0].longLife
        })
      } catch (err) {
        console.error('Error fetching:', err)
      }
    }
    loadData()
  }, [])

  useEffect(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)')
    function setThemeMode(e) {
      if (e.matches) {
        setMode('Dark')
      } else {
        setMode('Light')
      }
    }
    darkMode.addListener(setThemeMode)
  }, [mode])

  const handleChangeNumber = event => {
    setInputNumber(parseInt(event.target.value))
  }

  const handleChangeType = event => {
    setSelectedType(event.target.value)
  }

  const handleSubmit = event => {
    let tsatsaCount;
    event.preventDefault();
    if (inputNumber === '' || inputNumber === undefined) {
      alert('Please add number of tsatsas you made.')
      return
    }
    if (selectedType === '' || selectedType === undefined) {
      alert('Please select the type of tsatsas you made.')
      return
    }

    if (parseInt(inputNumber) > allTsatsas[selectedType]) {
      tsatsaCount = 0
    } else {
      tsatsaCount = allTsatsas[selectedType] - parseInt(inputNumber)
    }

    setAllTsatsas({...allTsatsas, [selectedType]: tsatsaCount})

    fetch(process.env.REACT_APP_AWS_DYNAMODB_URI, {
      method: 'PUT',
      body: JSON.stringify({
        [selectedType]: tsatsaCount,
        mantra_id: "07-06-2023-stupa-nrc"
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(err => console.log('Error:', err))

    setInputNumber()
  }

  let totalCount = Object.values(allTsatsas).reduce((a, b) => a + b, null);

  return (
    <div
      className="App"
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <MantrasIntro />
      
      {totalCount >= 0 ? (
        <>
          <TsatsasAmount allTsatsas={allTsatsas} />
          
          { totalCount > 0 && <TsatsasForm
            allTsatsas={allTsatsas}
            inputNumber={inputNumber}
            handleChangeNumber={handleChangeNumber}
            handleChangeType={handleChangeType}
            handleSubmit={handleSubmit}
          />}
          <Confetti width={width} height={height} recycle={false} run={totalCount === 0} numberOfPieces={1500} />
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default App