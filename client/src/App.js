import React, { useState, useEffect } from 'react'
import { Header } from './Components/Layout/Header'
import { Body } from './Components/Layout/Body'
import { Footer } from './Components/Layout/Footer'

function App() {
  const [getApiData, setApiData] = useState(null)

  useEffect(() => {
    fetch('/time')
      .then((res) => res.json())
      .then((data) => setApiData(data.time))
  }, [])

  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
