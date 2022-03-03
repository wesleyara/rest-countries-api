import React, { useEffect, useState } from "react";
import { APIprops } from "../../Components/Types";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  HomePageWrapper,
  SearchContainer,
  CardContainer,
  CardWrapper,
} from "../../Styles/HomeStyle/HomeStyle";
import Loadings from "../../Components/Loading";

const API_URL = "https://restcountries.com/v2/all";

export default function HomePage() {
  const [dataAPI, setDataAPI] = useState<APIprops[]>([]);

  useEffect(() => {
    async function restAPI() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setDataAPI(data);
    }

    restAPI();
  }, []);

  return (
    <HomePageWrapper>
      <SearchContainer>
        <div>
          <button>
            <BsSearch />
          </button>
          <input
            placeholder="Search for a country..."
            type="text"
            name=""
            id=""
          />
        </div>

        <select name="" id="">
          <option value="" disabled selected hidden>
            Filter by Region
          </option>
          <option value="">All</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
        </select>
      </SearchContainer>
      <CardContainer>
        {dataAPI.length > 0 ? (
          dataAPI.map((val) => {
            return (
              <CardWrapper key={val.name}>
                <Link to={val.alpha3Code}>
                  <img src={val.flag} alt="" />
                  <div>
                    <h3>{val.name}</h3>
                    <p>
                      <strong>Population:</strong>{" "}
                      {val.population.toLocaleString()}
                    </p>
                    <p>
                      <strong>Region:</strong> {val.region}
                    </p>
                    <p>
                      <strong>Capital:</strong> {val.capital}
                    </p>
                  </div>
                </Link>
              </CardWrapper>
            );
          })
        ) : (
          <Loadings />
        )}
      </CardContainer>
    </HomePageWrapper>
  );
}
