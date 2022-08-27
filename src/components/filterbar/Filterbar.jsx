import React from "react";
import "../filterbar/filterbar.css";
import { BsChevronDown } from "react-icons/bs";
import { useFilters } from "../../context/filterContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

const FilterConstants = ["Rent", "Buy"];
export const FilterBar = () => {
  const { state, dispatch } = useFilters();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="filter-item-container border-round">
      <ul className="filter-items flex-center">
        {FilterConstants.map((item, index) => {
          return (
            <li
              className={`filter-item ${
                state.sortBy === item &&
                pathname === "/" &&
                "filter-link-active"
              }`}
              key={index}
              onClick={() => {
                navigate("/");
                dispatch({ type: "SORT_BY_TYPE", payload: item });
              }}
            >
              {item}
            </li>
          );
        })}

        <li
          className={`filter-item ${
            pathname === "/sell" && "filter-link-active"
          }`}
          onClick={() => navigate("/sell")}
        >
          Sell
        </li>

        <li className="flex-center">
          Manage Property <BsChevronDown className="ml-2" />
        </li>
        <li className="flex-center">
          Resources <BsChevronDown className="ml-2" />
        </li>
      </ul>
    </div>
  );
};
