import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const colourArray = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
  let time; 
  

  return (
    <>
      <div className="nav-bar">
        <h1>React Landing Page</h1>
        <ul>
          <li>Home</li>
          <li>Hero</li>
          <li>Features</li>
          <li>Footer</li>
        </ul>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to my Vite and React Landing Page</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="card">
        <p>Click here to move this button.</p>
        <button id="movingbtn" onClick={() => document.getElementById("movingbtn").style.transform = `TranslateX(${Math.floor(Math.random(0,50)*50)}%) TranslateY(${Math.floor(Math.random(0,50)*50)}%) `}>
          Move me
        </button>
        <p>This is the websites first Card.</p>
      </div>
      <div className="card">
        <p>Click here to display the date time.</p>
        <button onClick={() => time => Date().slice(15, 25)}>
          The current time is: {time}
        </button>
        <p>This is the websites second Card.</p>
      </div>
      <div className="card">
        <p>This is the websites third Card.</p>
      </div>
      <div className="footer">
        <p>This website was designed by Rhys Fountain.</p>
      </div>
    </>
  )
}

export default App
