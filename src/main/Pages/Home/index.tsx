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

      const search = document.getElementById("search") as HTMLInputElement;
      const x = document.querySelectorAll(".cardItem") as NodeListOf<Element>;

      search.addEventListener("input", () => {
        let searc = search.value;
        searc = searc.toLowerCase();

        for (let i = 0; i < x.length; i++) {
          if (!x[i].innerHTML.toLowerCase().includes(searc)) {
            x[i].classList.add("remov");
          } else {
            x[i].classList.remove("remov");
          }
        }
      });

      const select1 = document.getElementById("filt") as HTMLSelectElement;

      select1.addEventListener("change", () => {
        let value1 = select1.options[select1.selectedIndex].value;
        value1 = value1.toLowerCase();

        if (value1 !== "all") {
          for (let i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toLowerCase().includes(value1)) {
              x[i].classList.add("remov");
            } else {
              x[i].classList.remove("remov");
            }
          }
        } else {
          for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("remov");
          }
        }
      });
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
            id="search"
          />
        </div>

        <select name="" id="filt">
          <option value="" disabled selected hidden>
            Filter by Region
          </option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </SearchContainer>
      <CardContainer>
        {dataAPI.length > 0 ? (
          dataAPI.map((val) => {
            return (
              <CardWrapper className="cardItem" key={val.name}>
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
