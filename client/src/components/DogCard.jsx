import React from 'react';
import s from '../styles/DogCard.module.css'


export default function DogCard({name, img, temperaments}) {
    return(
        <div >
            <img className={s.dogImage} src={img} alt="img not found"/>
            <h3 className={s.subTitle}>{name}</h3>
            <h5 className={s.temperament}>{temperaments}</h5>
        </div>
    )    
}
