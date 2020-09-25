import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from './Components/Button'
import { ExampleCard } from './Components/Card'

function App() {
  const [getApiData, setApiData] = useState(null)

  useEffect(() => {
    fetch('/time')
      .then((res) => res.json())
      .then((data) => setApiData(data.time))
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <div>{getApiData}</div>
        <Button />
        <ExampleCard />
      </header>
    </div>
  )
}

export default App
