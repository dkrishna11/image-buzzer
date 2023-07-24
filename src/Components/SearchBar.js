import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SearchBar.css";

const SearchBar = ({ setInfo }) => {
  let [search, setSearch] = useState(null);


  useEffect(() => {
    getImages();
  },[]);

  async function getImages() {
    try {
      let response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: search || "nature",
        },
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
        },
      });
      setInfo(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="search-bar">
      <div>
        <h1>Image Buzzer</h1>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search Image here...."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button onClick={getImages}>Search</button>
      </div>
      
    </div>
  );
};

export default SearchBar;
