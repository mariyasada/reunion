import React from "react";
import "./card.css";
import { BiBed, BiArea } from "react-icons/bi";
import { FaBath, FaRegHeart } from "react-icons/fa";
import { useFilters } from "../../context/filterContext";

export const HomeCard = ({ item }) => {
  const { state, dispatch } = useFilters();
  return (
    <div className="card flex-center flex-column ">
      <div className="card-image-lg ">
        <img src={item.image} alt="image-of-house" className="house-image" />
      </div>
      <div className="card-details flex-center flex-column gap">
        <p className="propertyType"> {item.propertyType}</p>
        <p className="price">
          ${item.price} <span className="gray-color"> /month</span>
        </p>
        <h3 className="name">{item.name}</h3>
        <p className="address">{item.place}</p>
        <div className="details-of-home flex-center space-between gap">
          <p className="flex-center">
            <BiBed /> {item.bed} bed
          </p>
          <p className="flex-center">
            <FaBath /> {item.bath} bath
          </p>
          <p className="flex-center">
            <BiArea />
            {item.sqft}
          </p>
        </div>
      </div>
      <div className="btn-div flex-center">
        <button
          className="favorite-btn flex-center"
          onClick={() => dispatch({ type: "ADD_TO_FAVORITE", payload: item })}
        >
          <FaRegHeart />
        </button>
      </div>
      {item.isPopular && <span className="popular-badge">Popular</span>}
    </div>
  );
};
