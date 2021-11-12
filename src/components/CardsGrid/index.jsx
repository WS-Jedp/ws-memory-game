import React from 'react'
import { Card } from '../Card'
import './styles.css'

export const CardsGrid = ({ cards }) => {

    return (
        <section className="cards-grid">
            {
                cards.map((card, i) => (
                    <Card 
                        key={i}
                        id={card.id}
                        number={i+1}
                        url={card.url}
                    />
                ))
            }
        </section>
    )
}