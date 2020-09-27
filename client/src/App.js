import React, { useState, useEffect } from 'react'
import Header from './Components/Layout/Header'
import { MyRoutes } from './MyRoutes'
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
      <MyRoutes />
      <Footer />
    </div>
  )
}

export default App
