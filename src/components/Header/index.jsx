import React, { useContext } from 'react'
import { AppContext } from '../../context'

export const Header = () => {

    const { movements, resetGame } = useContext(AppContext) 

    return (
    <header className="lines-title row col-12 d-flex align-items-center justify-content-between px-2 py-3">

        <div className="d-flex flex-row align-items-center justify-content-between col-9">
            <h2 className="fs-3">
                👁️ <span className="text-shadow-white">Intentos:</span>
            </h2>

            <strong className="fs-3 text-shadow-white">
                0{ movements }
            </strong>
        </div>
        <div className="d-flex align-items-center justify-content-end col-3">
            <button className="btn btn-purple-light" onClick={resetGame}>Reiniciar</button>
        </div>
    </header>
    )
}