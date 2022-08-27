import React from "react";
import { HomeCard } from "../../components/HomeCards/HomeCard";
import { useFilters } from "../../context/filterContext";
import "./fav.css";

const Favorite = () => {
  const { state } = useFilters();
  const { favorites } = state;
  return (
    <div className="favourite-page flex-center flex-column">
      <h1 className="heading-favorite">Favourites ({favorites.length})</h1>
      <div className="grid-3 row-gap">
        {favorites.map((item) => {
          return <HomeCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Favorite;
