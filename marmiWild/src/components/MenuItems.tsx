function MenuItem(props) {
    //create a state isFavorite that has the inital value of isFavorite that comes from the props
  
    return (
      <section className="itemContainer">
        <figure className="imgContainer">
          <img src={props.foodImage} alt={props.itemName} />
          <figcaption>
            <h2>{props.itemName}</h2>
            <p>{props.description}</p>
          </figcaption>
        </figure>
        <aside>{props.price} EUR</aside>
  
        {/* the button to play with the isFavorite state:
                - onClick, will toggle the isFavorite state,
                - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
            */}
        <button type="button">{}</button>
      </section>
    );
  }
  
  export default MenuItem;