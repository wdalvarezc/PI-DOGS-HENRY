import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Logo from "../image832.png";
import Imge from "../g26407.png";
import {
  getDogs,
  getTemperaments,
} from "../actions";

import s from "../styles/NavBar.module.css";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(9);
  const indexOfLastDog = currentPage * dogsPerPage; // 1*9=9 2*9=18 3*9=27 4*9=36 5*9=45...
  const indexOfFirstDog = indexOfLastDog - dogsPerPage; // 9-9=0 18-9=9 27-9=18 36-9=27 45-9=36...


  

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, []);





  return (
    <header>
      <nav className={s.navbar}>
        <ul className={s.list}>
          <li className={s.list_item}>
            <NavLink className={s.home} exact to="/">
              <img
                className={s.imgHome}
                id="logoDog"
                src={Logo}
                width="30"
                height="30"
                alt=""
              />
            </NavLink>
        <div className={s.t_f_s}>

            <h1 className={s.title}>The Dog's World</h1>

            <SearchBar />
            </div>
            <Link className={s.newdog} to="/dogs">
              <img className={s.imgNew} src={Imge} alt="crear nuevo"></img>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
