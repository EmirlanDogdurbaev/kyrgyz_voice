import React from 'react'
import cl from './Books.module.scss'
import Book from '../../components/Book/Book'

function Books() {
  return (
    <div className={cl.wrap}> 
        <Book src="https://ticket.kg/images/items/img_kizil_alma1616083315.jpg" name="Кызыл алма"/>    
    </div>
  )
}

export default Books