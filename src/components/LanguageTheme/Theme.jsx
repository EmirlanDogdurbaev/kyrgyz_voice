import React from 'react'
import cl from './Theme.module.scss'

function Theme(props) {
  return (
    <a href={props.theme} className={cl.box}>
        <p>{props.theme}</p>
        <button type="button">Изучить...</button>
    </a>
  )
}

export default Theme