// TODO

// Create a React component
// It is a function that returns JSX

const Groceries = function() {
  return (
    <div>
      <h2>My grocery list</h2>
      <GroceryList items={['Frozen waffles', 'Syrup']} />
    </div>
  )
}
const GroceryList = function(props) {
  return (
    <ul class="grocery-list">
      {props.items.map((itemFromProps) => (
        <GroceryListItem item={itemFromProps} />
      ))}
    </ul>
  )
};

const GroceryListItem = function(props) {
  const [procured, setAsProcured] = React.useState(false);
  const style = {
    textDecoration: procured ? 'line-through' : 'none'
  };
  const onClickListItem = function(event) {
    setAsProcured(!procured);
  }
  return (
    <li style={style} onClick={onClickListItem}>{props.item}</li>
  )
}

// Render a React component
// It requires a component instance and a DOM element that will house this component (and this component only?)
ReactDOM.render(<Groceries />, document.getElementById("app"));