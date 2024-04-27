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

function App() {
  // const [data, setData] = useState([])
  const [allTsatsas, setAllTsatsas] = useState(70)
  const [inputData, setInputData] = useState()
  const [mode, setMode] = useState()

  const { width, height } = useWindowSize();

  // useEffect(() => {
  //   async function loadData() {
  //     try {
  //       let mantrasAmount = { mantras_count: 0 }
  //       let sortedData = []
  //       const response = await fetch(process.env.REACT_APP_AWS_DYNAMODB_URI)
  //       const resJson = await response.json()
  //       if (resJson.length) {
  //         mantrasAmount = resJson.reduce((a, b) => ({
  //           mantras_count: a.mantras_count + b.mantras_count
  //         }))
  //         sortedData = resJson.sort(function (a, b) {
  //           return new Date(b.date_created) - new Date(a.date_created)
  //         })
  //       }
  //       setData(sortedData)
  //       setAllMantras(mantrasAmount)
  //     } catch (err) {
  //       console.error('Error fetching:', err)
  //     }
  //   }
  //   loadData()
  // }, [])

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

  const handleChange = event => {
    setInputData(parseInt(event.target.value))
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (inputData === '' || inputData === undefined) {
      alert('Please add number of tsatsas you made.')
      return
    }
    if (parseInt(inputData) > allTsatsas) {
      setAllTsatsas(0)
    } else {
      setAllTsatsas(allTsatsas - parseInt(inputData))
    }

    // fetch(process.env.REACT_APP_AWS_DYNAMODB_URI, {
    //   method: 'POST',
    //   body: JSON.stringify(inputData),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).catch(err => console.log('Error:', err))

    setInputData()
  }

  return (
    <div
      className="App"
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <MantrasIntro />
      {allTsatsas >= 0 ? (
        <>
          <TsatsasAmount allTsatsas={allTsatsas} />
          
          { allTsatsas > 0 && <TsatsasForm
            allTsatsas={allTsatsas}
            inputData={inputData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />}
          <Confetti width={width} height={height} recycle={false} run={allTsatsas === 0} numberOfPieces={1500} />
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default App