export function DrinksNew() {
  return (
    <div id="drinks-new">
      <h3>Make a new cocktail!</h3>
      <form>
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
