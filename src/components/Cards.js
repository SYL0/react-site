import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>FUTR UPDATES</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src='images/img-1.jpg' 
                        text='Breakthrough Technologies are on the Horizon' 
                        label='Horizon' 
                        path='/about' />
                        <CardItem src='images/img-3.jpg' 
                        text='Is Seasteading the future?' 
                        label='Seasteading' 
                        path='/about' />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src='images/img-7.jpg' 
                        text='Finding Fulfilment in the Digital Age' 
                        label='Fulfilment' 
                        path='/about' />
                        <CardItem src='images/img-8.jpg' 
                        text='Reforesting the Worlds Deserts' 
                        label='Reforestation' 
                        path='/about' />
                        <CardItem src='images/img-9.jpg' 
                        text='The Rise of Permaculture' 
                        label='Permaculture' 
                        path='/about' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
