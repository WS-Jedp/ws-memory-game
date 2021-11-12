import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context'
import './styles.css'

export const Card = ({ id, number, url }) => {

    
    const { firstCard, setFirstCard, secondCard, setSecondCard, addMovements, addGuessed, addGuessedIdImage, guessedImages } = useContext(AppContext)

    function handleClick(ev, card) {

        // If images is guessed avoid side effects
        if(guessedImages.some((idNumber => idNumber === id)) ) {
            return true
        }

        // Selects the first card
        if(!firstCard) {
            ev.currentTarget.classList.add('card--show')
            setFirstCard({
                ...card,
                number,
                ev,
                currentTarget: ev.currentTarget,
            })
            return true
        }

        // Turn back the selected card
        if(firstCard && firstCard.number === number) {
            setFirstCard(null)
            ev.currentTarget.classList.remove('card--show')
            return true;
        }


        // Selects the second card
        if(firstCard && !secondCard) {
            setSecondCard({
                ...card,
                number,
                ev
            })
            ev.currentTarget.classList.add('card--show')
            addMovements()
            
            if(firstCard.id === card.id) {
                addGuessed()
                addGuessedIdImage(id)
                setFirstCard(null)
                setSecondCard(null)

                firstCard.currentTarget.classList.add('card--guessed')
                ev.currentTarget.classList.add('card--guessed')

                return true;
            } else {
                // If failed try, turn back both cards
                const currTarget = ev.currentTarget
                setTimeout(() => {
                    firstCard.currentTarget.classList.remove('card--show')
                    currTarget.classList.remove('card--show')
                    setFirstCard(null)
                    setSecondCard(null)
                }, 1200)
            }

        }
    }

    return (
        <article 
            className="card__container" 
            onClick={(ev) => handleClick(ev, { id, number, url })}
        >

            <div className="d-flex align-items-center justify-content-center position-absolute card card__front">
                <figure className="card__front-image">
                    <img src={url} alt={`This images is ${url}`} />
                </figure>
            </div>
            <div className="d-flex align-items-center justify-content-center w-100 h-100 position-absolute card card__back">
                <span className="fw-bold fs-5 text-shadow-white">
                    { number }
                </span>
            </div>

        </article>
    )
}