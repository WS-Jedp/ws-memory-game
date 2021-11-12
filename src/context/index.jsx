import { createContext, useState, useEffect } from 'react'
import { DoubleImages } from '../utils'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {


    useEffect(() => {
        const SCORES_JSON = localStorage.getItem('scores')
        setScores(JSON.parse(SCORES_JSON) || [])
    }, [])

    const GUESSED_TO_WIN = DoubleImages.length / 2;
    const [ playGame, setPlayGame ] = useState(false)
    const [ firstCard, setFirstCard ] = useState(null)
    const [ secondCard, setSecondCard ] = useState(null)
    const [ movements, setMovements ] = useState(0)
    const [ guessed, setGuessed ] = useState(0)
    const [ guessedImages, setGuessedImages ] = useState([])
    const [ scores, setScores ] = useState([])


    const addMovements = () => setMovements(old => (old+1))
    const addGuessed = () => setGuessed(old => (old+1))
    
    const resetGame = () => {
        if(firstCard) firstCard.currentTarget.classList.remove('card--show')
        if(secondCard) secondCard.currentTarget.classList.remove('card--show')
        setFirstCard(null)
        setSecondCard(null)
        setMovements(0)
        setGuessed(0)
        setPlayGame(false)

        window.document.querySelectorAll('.card__container').forEach(el => {
            el.classList.remove('card--show', 'card--guessed')
        })            
        
    }

    const addScore = (name) => {
        const currScores = scores || []
        localStorage.setItem('scores', JSON.stringify([...currScores, { name, score: movements }]))
        setScores(old => [...currScores, {
            name,
            score: movements,
        }])
    }

    const addGuessedIdImage = (id) => {
        setGuessedImages(old => [...old, id])
    }

    const initialState = {
        firstCard,
        secondCard,
        setFirstCard,
        setSecondCard,
        movements,
        addMovements,
        resetGame,
        addGuessed,
        addScore,
        guessed,
        guessedImages,
        addGuessedIdImage,
        scores,
        playGame,
        setPlayGame,
        GUESSED_TO_WIN
    }

    return (
        <AppContext.Provider value={initialState}>
            {
                children
            }
        </AppContext.Provider>
    )
}
