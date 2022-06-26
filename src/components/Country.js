import React from 'react'
import Style from '../Style/country.module.css'
const Country = (props) => {
    const { name, capital, region, area, flags, population } =
        props.country;
    const handleRemoveCountry = (name) => {
        props.onRemoveCountry(name)
    }
    return (
        <article className={Style.country}>
            <div>
                <img src={flags.png}
                    alt={name.common}
                    className={Style.flag} />
                <h3>Name : {name.common} </h3>
                <h3>Population : {population} </h3>
                <h3>Capital : {capital} </h3>
                <h3>Region : {region} </h3>
                <h3>Area : {area} </h3>
                <button
                    className={Style.btn}
                    onClick={() => {
                        handleRemoveCountry(name.common)
                    }}>
                    Remove Country
                </button>
            </div>
        </article>
    )
}

export default Country