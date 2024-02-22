import React from "react";
import { useSelector, useDispatch } from "react-redux"; 

const Favourites = () => {
  const favorites = useSelector((state) => state.favoritesReducer.favorites);
  const dispatch = useDispatch(); 

  return (
    <div>
      <div className="text-center py-4">
        <h2>Favorites</h2>
      </div>

      <ul>
        {favorites.map((item) => (
          <li key={item.id} style={ {display: "flex" , marginLeft:"200px" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ maxWidth: "300px", maxHeight: "300px" }}
            />

            <div style={{marginLeft:"100px" ,marginTop:"80px"}}>
            <p>{item.title}</p>
            <p>Price: ${item.price}</p>
            
            </div>

            <button type="button" class="btn btn-dark"  style={{ marginLeft:"390px" , maxHeight: "40px" , marginTop: "80px"}  }  onClick={() => dispatch({ type: 'REMFROMFAV', payload: item.id })}>
              Remove 
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
