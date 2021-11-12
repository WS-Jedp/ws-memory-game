import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../context'

import { Header } from '../../components/Header'
import { Stats } from '../../components/Stats'
import { CardsGrid } from '../../components/CardsGrid'
import { Modal, ModalMessage, ModalForm } from '../../components/Modal'

import { DoubleImages, ShuffleArray } from '../../utils'

import './styles.css'

export const App = () => {

    const { playGame, setPlayGame, GUESSED_TO_WIN, guessed, movements, addScore, resetGame } = useContext(AppContext)

    const [cards, setCards] = useState([])
    const [name, setName] = useState('')

    const handlePlay = () => {
        setPlayGame(true)
    }

    const handleWin = () => {
        addScore(name)
        setCards([])
        resetGame()
    }

    useEffect(() => {
        const randomCards = ShuffleArray(DoubleImages)
        setCards(randomCards)
    }, [cards, playGame])

    return (
        <section className="row w-100 memory-game bg-purple px-5 py-3 m-0">

            <article className="col-12 col-md-8 p-4">
                <Header />

                <div className="py-4">
                    <CardsGrid cards={cards}/>
                </div>

            </article>

            <aside className="position-realtive row d-flex align-items-start justify-content-start col-12 col-md-4 p-4">
                <Stats />
            </aside>

            {
                !playGame && (
                    <Modal>
                        <ModalMessage 
                            title="MemoryGame 🧠"
                            message="Welcome to the memory game, ready to start?"
                            action="Play 🚀"
                            onClick={handlePlay}
                        />
                    </Modal>
                )
            }

            {
                GUESSED_TO_WIN === guessed && (
                    <Modal>
                        <ModalForm 
                            title="Congratulations 🎉"
                            message={`You win the game with ${movements}! 🚀`}
                            action="Save 🧠"
                            currName={name}
                            setName={setName}
                            onClick={handleWin}
                        />
                    </Modal>
                )
            }

            
        </section>
    )
}