/* eslint-disable react/prop-types */
export function DrinksIndex(props) {
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
