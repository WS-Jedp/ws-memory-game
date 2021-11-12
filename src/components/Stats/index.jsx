import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../context'


export const Stats = () => {

    const { scores } = useContext(AppContext)

    const [orderScores, setOrderScores] =  useState(scores)

    useEffect(() => {
        const MAX_TEN_SCORES = scores.slice(0, 10);
        setOrderScores(MAX_TEN_SCORES.sort((a, b) => a.score - b.score))
    }, [scores])

    return (
        <article className="col-12 m-0 p-0 d-flex flex-column align-items-start justify-content-start">

            <div className="w-100 d-flex align-items-center justify-content-center lines-title py-3">

                <h1 className="fs-3">
                    <span className="text-shadow-white">Memory</span><span className="text-purple-light text-shadow-purple-light">Game</span> 🧠
                </h1>

            </div>

            <section className="position-relative row m-0 p-0 scores my-5">

                <h2 className="fs-4 m-0 p-0 mb-3">
                    👑 <span className="text-shadow-white">Puntajes:</span>
                </h2>

                <table className="scores__table col-12">
                    <thead className="w-100">
                        <tr>
                            <th className="fw-bold fs-5 text-shadow-white">#</th>
                            <th className="fw-bold fs-5 text-shadow-white">Name</th>
                            <th className="fw-bold fs-5 text-shadow-white">Points</th>
                        </tr>
                    </thead>

                    <tbody className="w-100 ">
                        {
                            !orderScores.length ? (
                                <tr>
                                    <p className="w-100 py-4 fw-light text-shadow-white fs-6">There is no scores save yet! Be the first! 🚀</p>
                                </tr>
                            ) : orderScores.map((score, i) => (
                                <tr className="lines-title py-5" key={i}>
                                    <td className="text-shadow-white fw-bold fs-6">{i+1}</td>
                                    <td className="fs-6">{score.name}</td>
                                    <td className="fs-6">{score.score}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </section>
            
        </article>
    )
}