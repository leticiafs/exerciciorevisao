import React, { useState } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import axios from "axios";

const API_URL = "https://brainn-api-loterias.herokuapp.com/api/v1/";

const GlobalState = (props) => {
  const [loterias, setLoterias] = useState([]);

  const getLoterias = () => {
    axios.get(`${API_URL}/loterias`)
        .then((response) => {
            setLoterias(response.data);
            console.log(loterias)
        })
        .catch((erro) => {
            console.log(erro.message);
        });

  };

const states = {loterias};
const setters = { setLoterias};
const requests = { getLoterias};

const data = { states, setters, requests };

return (
  <GlobalStateContext.Provider value={data}>
    {props.children}
  </GlobalStateContext.Provider>
)};

export default GlobalState;