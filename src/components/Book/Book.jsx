import React from 'react'
import cl from "./Book.module.scss"
import { Link } from 'react-router-dom'

function Book(props) {
  return (
    // to={`${props.name}`}
    <Link to="bookText"  className={cl.book}>
        <img src={props.src} alt="photo" className={cl.img}/>
        <h1 className={cl.name}>{props.name}</h1>
    </Link>
  )
}

export default Book