/* eslint-disable react/prop-types */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function Header() {
  return (
    <header>
    <a href="#">Home</a> | <a href="#drinks-index">All Cocktails</a> | <a href="#drinks-new">New Cocktail</a>
    </header>
  );
}

function DrinksNew() {
  return (
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
  );
}

function DrinksIndex(props) {
  return (
    <div id="drinks-index">
      <h3>All the Cocktails!</h3>
      {/* loop of defined recipe data props from the parent component */}
      {props.drinks.map((drink) => (
        <div key={drink.id}>
          <h2>{drink.name}</h2>
          <img src={drink.image_url} alt="drink pics" />
          <p>Mixologist: {drink.mixologist} </p>
          <button>More Info!</button>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
          <p>Copyright 2023</p>
        </footer>
  );
}

function Content() {
  let drinks = [
    {
      id: 1,
      name: "Drink One",
      mixologist: "Mike",
      image_url: "https://media.istockphoto.com/id/1216205052/photo/blue-old-fashioned-cocktail-with-cherry-on-the-rustic-background.webp?b=1&s=170667a&w=0&k=20&c=06KnDW7kDynqlpnR644IYljQ05aaTGD5Wzo_ESpfvNA=",
    },
    {
      id: 2,
      name: "Drink Two",
      mixologist: "Mo",
      image_url: "https://media.istockphoto.com/id/1167570076/photo/tropical-cocktails-near-swimming-pool.webp?b=1&s=170667a&w=0&k=20&c=P_tn8hl_V94CVR3l_72-DVyaKTETIHkCKnZCr5Krc18=",
    },
    {
      id: 3,
      name: "Drink Three",
      mixologist: "Shayna",
      image_url: "https://media.istockphoto.com/id/1172084897/photo/women-raising-a-glasses-of-spritz-at-the-dinner-table.webp?b=1&s=170667a&w=0&k=20&c=pluXQFh8t8CraUEFUSB7XE6HV38M7UqIzYaUqcbPykQ=",
    },
  ];

  return (
    <div>
      <DrinksNew />
      <DrinksIndex drinks={drinks} />
    </div>
  );
}

function App() {
  
  return (
    <div>
      <Header />
      <Content />
      <Footer />
       
    </div>
  )
}

export default App
