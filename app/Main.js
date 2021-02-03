import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Clock from "./components/clock";
import ChangeColor from "./components/ChangeColor";
import WeatherWidget from "./components/WeatherWidget";

function Main() {
  const [counter, setCounter] = useState(0);
  const [apiData, setApiData] = useState([]);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  // generate IDs
  const idx = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  async function fetchData() {
    try {
      const pokeData = await Axios.get("https://pokeapi.co/api/v2/pokemon/2/");
      // console.log(pokeData.data, "this is ur data");
      setApiData(pokeData.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Fragment>
      <div className="text-center mt-5 ">
        <div className="container">
          <WeatherWidget />
          <Clock />
          <hr />
          <h1 className="mt-4">{counter}</h1>
          <button className="btn btn-primary mt-5" onClick={increaseCounter}>
            Increase Counter
          </button>
          <hr />
          <ChangeColor />
        </div>
        <table className="table table-responsive table-hover table-striped table-sm mt-5">
          <thead>
            <tr>
              {Object.keys(apiData).map(items => (
                <th key={idx()} scope="col">
                  {items}
                </th>
              ))}
            </tr>
            {/* <tr>{Object.keys(apiData).map(items => items !== "game_indices" ? <th scope="col">{items}</th> : null)}</tr> */}
          </thead>
          <tbody>
            <tr>{Object.values(apiData).map(items => (typeof items !== "object" ? <td key={idx()}>{JSON.stringify(items)} </td> : <td key={idx()}>{JSON.stringify(typeof Object.keys(items))}</td>))}</tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

ReactDOM.render(<Main />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
