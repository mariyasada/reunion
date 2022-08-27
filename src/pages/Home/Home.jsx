import React from "react";
import { data } from "../../components/Database/data";
import { HomeCard } from "../../components/HomeCards/HomeCard";
import { Navbar } from "../../components/Navbar/Navbar";
import { SearchBar } from "../../components/Searchbar/SearchBar";
import { useFilters } from "../../context/filterContext";
import "./home.css";

const Home = () => {
  const { filteredData, state, dispatch } = useFilters();
  return (
    <div>
      <div className="banner-image">
        <img
          src="https://ik.imagekit.io/qrhnvir8bf0/r-architecture-wDDfbanbhl8-unsplash_u8dukmtXp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661351860384"
          alt="banner-image"
          className="banner"
        />
      </div>
      <div className="search-div flex-center ">
        <span className="tagline">Find your perfect home.</span>
        <input
          type="text"
          className="input-searchbar"
          placeholder="Search with searchbar"
          value={state.searchByQuery}
          onChange={(e) =>
            dispatch({ type: "SEARCH_BY_QUERY", payload: e.target.value })
          }
        />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="grid-3">
        {filteredData.map((item) => {
          return <HomeCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
