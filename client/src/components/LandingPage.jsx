import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../styles/LandingPage.module.css'

export default function LandingPage() {
    return(
        <div>
            <NavLink className={s.navlink} to ='/home'>            
                <button className={s.btn}>INICIAR</button>
            </NavLink>

        </div>
    )
}