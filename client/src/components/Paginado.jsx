import React from 'react';
import s from '../styles/Paginado.module.css';


export default function Paginado({dogsPerPage, allDogs, paginado}) {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(allDogs/dogsPerPage); i++){
        pageNumbers.push(i)
    }
    return(
    <nav className={s.nav}>
        <ul className={s.paginado}>
            {pageNumbers &&
            pageNumbers.map(number=> (
           <li className={s.number} key={number}>
                 <p className={s.img} onClick={() => paginado(number)}>{number}</p>
             </li>
            ))}
        </ul>
    </nav>

    )
    
}