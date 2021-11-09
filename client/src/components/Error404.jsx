import React from "react";
import s from '../styles/Error404.module.css'
import { Link } from "react-router-dom";
import imagen from "../g9806.png"
export const Error404 = () => {
    return (
        <div>
            <Link to= '/home'><img src={imagen} alt="" /></Link>
            <h3 className={s.title} >Error 404</h3>
            <img src="https://c.tenor.com/H250fHD6_AIAAAAC/llorar-jake.gif" alt=""/>
            <p className={s.subTitle}>Pagina no Encontrada</p>
    
        </div>
    )
}

export default Error404;