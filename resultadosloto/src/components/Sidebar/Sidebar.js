import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Resultados from '../Resultados/Resultados';
import './Sidebar.css';
import GlobalStateContext from '../../global/GlobalStateContext';



function Sidebar() {
  // const [states, setters, requests] = useContext(GlobalStateContext);
  const [loterias, setLoterias] = useState()


  const handleSelect = (event) => {
    setLoterias(event.target.value);
    console.log(loterias)
  }

 
//   useEffect(() => {
//     requests.getLoterias();
// }, [requests]);

// const getLoterias = () => {
//     axios.get(`https://brainn-api-loterias.herokuapp.com/api/v1/loterias`)
//     .then((response) => {
//         setLoterias(response.data);
//     })
//     .catch((erro) => {
//         console.log(erro.message);
//     });
// }


  return (
    <div className="box">
      <div className="sidebar">
        <div className="itenssidebar">
          <form>
            <div className="selectbg">
              <select  onChange={handleSelect}>
                <option value="0">Mega-Sena</option>
                <option value="1">Quina</option>
                <option value="2">Lotofácil</option>
                <option value="3">Lotomania</option>
                <option value="4">Timemania</option>
                <option value="5">Dia de sorte</option>
              </select>

            </div>
          </form>
          <div>
            <h2 classname="titulosorteio">mega-sena</h2>
          </div>
          <div className="dadosconcurso">
            <p>CONCURSO</p>
            <h3>4531 - 07/04/2020</h3>
          </div>
        </div>
      </div>
      <div className="curve"/>
      <Resultados/>

    </div>
  )
}

export default Sidebar