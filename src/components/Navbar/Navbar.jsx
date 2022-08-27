import React from "react";
import "./Navbar.css";
import { MdRealEstateAgent } from "react-icons/md";
import { FilterBar } from "../filterbar/Filterbar";
import { BiHomeHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useFilters } from "../../context/filterContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const { state } = useFilters();
  return (
    <nav className="Header-container flex-center space-between">
      <div className="heading-in-note-page">
        <span className="name-of-app flex-center">
          <MdRealEstateAgent />
          Findhome
        </span>
      </div>
      <div className="list-of-filters">
        <FilterBar />
      </div>
      <div className="btns-container flex-center gap mr-1 ">
        <p className="favorite flex-center">
          <BiHomeHeart onClick={() => navigate("/favorite")} />
        </p>
        <button className="btn login-btn">Login</button>
        <button className="btn signup-btn">Sign up</button>
      </div>
      {state.favorites.length > 0 && (
        <span className="badge flex-center">{state.favorites.length}</span>
      )}
    </nav>
  );
};
