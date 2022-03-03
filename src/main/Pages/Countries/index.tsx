import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import { APIprops } from "../../Components/Types";
import { alphas } from "../../Components/AlphaCode";
import {
  DescriptionWrapper,
  DetailsContainar,
  DetailsWrapper,
  Space,
  ButtonContainer,
  ButtonsBx,
} from "../../Styles/CountriesStyle";
import Loadings from "../../Components/Loading";

export default function Countries() {
  const { id } = useParams();

  const API_URL = `https://restcountries.com/v2/alpha/${id}`;

  const [dataAPI, setDataAPI] = useState<APIprops>();

  useEffect(() => {
    async function restAPI() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setDataAPI(data);
    }

    restAPI();
  }, [API_URL]);

  console.log(API_URL);
  console.log(dataAPI);

  return (
    <DetailsWrapper>
      <button onClick={() => history.back()}>
        <BiArrowBack /> Back
      </button>
      {dataAPI ? (
        <DetailsContainar key={dataAPI.name}>
          <div>
            <img src={dataAPI.flag} alt="" />
          </div>

          <DescriptionWrapper>
            <div>
              <h2>{dataAPI.name}</h2>
              <p>
                <strong>Native Name:</strong> {dataAPI.nativeName}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {dataAPI.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {dataAPI.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {dataAPI.subregion}
              </p>
              <p>
                <strong>Capital:</strong> {dataAPI.capital}
              </p>
            </div>

            <Space></Space>

            <div>
              <p>
                <strong>Top Level Domain:</strong> {dataAPI.topLevelDomain[0]}
              </p>
              <p>
                <strong>Currencies:</strong> {dataAPI.currencies[0].name}
              </p>
              <p>
                <strong>Languages:</strong> {dataAPI.languages[0].name}
              </p>
            </div>

            <ButtonContainer>
              <span>
                <strong>Border Countries:</strong>
              </span>
              <ButtonsBx>
                <ul>
                  {dataAPI.borders ? (
                    dataAPI.borders.map((valor) => {
                      return (
                        <Link key={valor} to={`/${valor}`}>
                          <li>{alphas[valor]}</li>
                        </Link>
                      );
                    })
                  ) : (
                    <li>None</li>
                  )}
                </ul>
              </ButtonsBx>
            </ButtonContainer>
          </DescriptionWrapper>
        </DetailsContainar>
      ) : (
        <Loadings />
      )}
    </DetailsWrapper>
  );
}
