import React from 'react'
import CardItem from './CardItem'
import "./Card.css"


function Cards() {
  return (
    <div className='cards'><h1>Check out These EPIC Destinations</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='card__items'>
                    <CardItem
                    src="images/img-9.jpg"
                    text="Explore the hidden waterfall deep inside the amazon jungle"
                    label="Adventure"
                    path="/services"
                    />
                        <CardItem
                    src="images/img-2.jpg"
                    text="Fun filed adventure islands"
                    label="Islands"
                    path="/services"
                    />
                        <CardItem
                    src="images/img-3.jpg"
                    text="Explore the endless possibilities of the seas"
                    label="Ocean fun"
                    path="/services"
                    />
                        <CardItem
                    src="images/img-4.jpg"
                    text="Vacations are not fun without games"
                    label="Recreation"
                    path="/services"
                    />
                        <CardItem
                    src="images/img-5.jpg"
                    text="Take a step closer to home"
                    label="Luxury Hotels"
                    path="/services"
                    />
             
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards