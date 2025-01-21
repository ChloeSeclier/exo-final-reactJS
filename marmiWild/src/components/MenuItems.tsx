
import { useState } from "react";

function MenuItem(props) {
    //create a state isFavorite that has the inital value of isFavorite that comes from the props
    const [isFavorite, setIsFavorite] = useState(props.isFavorite); 

    function handleClickFavorite(){
      setIsFavorite((isFavorite) => !isFavorite);
    }

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

        <button type="button" onClick={handleClickFavorite}>
        { isFavorite ? ("❤️") : ("🖤")} 
        </button>

      </section>
    );
  }
  
  export default MenuItem;