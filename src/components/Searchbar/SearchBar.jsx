import React from "react";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import { useFilters } from "../../context/filterContext";

const priceConstant = ["$500 - $2000", "$5000 - $10000", "$10000 - $90000"];
const propertyType = ["Houses", "single-family-home", "Bunglow"];

export const SearchBar = () => {
  const { formData, setFormData, state, dispatch, initialData } = useFilters();
  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (
      formData.location === "" ||
      formData.movedInDate === "" ||
      formData.property === "" ||
      formData.price === ""
    ) {
      toast("please fill all the fileds for better search", { icon: "✔" });
    } else {
      dispatch({ type: "SEARCH_BY_FORM", payload: formData });
      // setFormData({ location: "", price: "", property: "", movedInDate: "" });
    }
    setFormData(initialData);
  };
  return (
    <div className="searchbar-container flex-center">
      <div className="all-inputs-container flex-center">
        <span className="sm-div flex-center flex-column">
          <label htmlFor="Location">
            Location
            <input
              type="text"
              className="inputs"
              placeholder="Location"
              name="location"
              onChange={formChangeHandler}
              value={formData.location}
            />
          </label>
        </span>
        <span className="sm-div flex-center flex-column">
          <label htmlFor="When">
            Moved-in
            <input
              type="date"
              className="inputs"
              name="movedInDate"
              onChange={formChangeHandler}
              value={formData.movedInDate}
            />
          </label>
        </span>
        <span className="sm-div flex-center flex-column">
          <label htmlFor="price">
            Price
            <select
              className="inputs"
              name="price"
              id="price"
              onChange={formChangeHandler}
              value={formData.price}
            >
              <option value=""></option>
              {priceConstant.map((price) => (
                <option key={price} value={price} name={price}>
                  {price}
                </option>
              ))}
            </select>
          </label>
        </span>
        <span className="sm-div flex-center flex-column">
          <label htmlFor="propertyType">
            Property Type
            <select
              className="inputs"
              name="property"
              id="propertyType"
              onChange={formChangeHandler}
              value={formData.property}
            >
              <option value=""></option>
              {propertyType.map((property) => (
                <option key={property} value={property} name={property}>
                  {property}
                </option>
              ))}
            </select>
          </label>
        </span>
      </div>
      <button className="btn-search flex-center" onClick={clickHandler}>
        Search
      </button>
    </div>
  );
};
