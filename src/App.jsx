// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <div>
      {/* header */}
      <header>
        <a href="#">Home</a> | <a href="#drinks-index">All Cocktails</a> | <a href="#drinks-new">New Cocktail</a>
      </header>

      {/* new recipe form */}
      <div id="drinks-new">
        <h3>Make a new cocktail!</h3>
        <form >
          <div>
            Name: <input type="text" />
          </div>
          <div>
            Ingredients: <input type="text" />
          </div>
          <div>
            Image URL: <input type="text" />
          </div>
          <button type="submit">Create Cocktail</button>
        </form>
      </div>

      {/* all reciples */}
      <div id="drinks-index">
          <h3>All Cocktails</h3>
          <div className="drinks">
            <h2>Drink One</h2>
            <img src="https://media.istockphoto.com/id/1216205052/photo/blue-old-fashioned-cocktail-with-cherry-on-the-rustic-background.webp?b=1&s=170667a&w=0&k=20&c=06KnDW7kDynqlpnR644IYljQ05aaTGD5Wzo_ESpfvNA=" alt="" />
            <p>Mixologist:</p>
            <button>More Info!</button>
          </div>
          <div className="drinks">
            <h2>Drink Two</h2>
            <img src="https://media.istockphoto.com/id/1167570076/photo/tropical-cocktails-near-swimming-pool.webp?b=1&s=170667a&w=0&k=20&c=P_tn8hl_V94CVR3l_72-DVyaKTETIHkCKnZCr5Krc18=" alt="" />
            <p>Mixologist:</p>
            <button>More Info!</button>
          </div>
          <div className="drinks">
            <h2>Drink Three</h2>
            <img src="https://media.istockphoto.com/id/1172084897/photo/women-raising-a-glasses-of-spritz-at-the-dinner-table.webp?b=1&s=170667a&w=0&k=20&c=pluXQFh8t8CraUEFUSB7XE6HV38M7UqIzYaUqcbPykQ=" alt="" />
            <p>Mixologist:</p>
            <button>More Info!</button>
          </div>
        </div>

        {/* footer */}
        <footer>
          <p>Copyright 2023</p>
        </footer>
    </div>
  )
}

export default App
