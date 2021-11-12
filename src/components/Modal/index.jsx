import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

export const ModalMessage = ({title, message, onClick, action, danger = false}) => {


    return (
        <article className="row modal-message bg-white p-3">
            <h2>{title}</h2>
            <p>{message}</p>

            <div className="col-12 d-flex align-items-center justify-content-end">
                <button onClick={onClick} className={`btn ${!danger ? 'btn-purple-light' : 'btn-danger'}`}>
                    { action }
                </button>
            </div>
        </article>
    )
}

export const ModalForm = ({ title, message, onClick, action, setName, currName }) => {

    const handleChange = (ev) => {
        setName(ev.target.value)
    } 

    return (
        <article className="row modal-message bg-white p-3">
            <h2>{title}</h2>
            <p>{message}</p>
            <input className="form-control" placeholder="Write your name" type="text" name="name" onChange={handleChange} />

            <div className="col-12 d-flex align-items-center justify-content-end py-5">
                <button onClick={onClick} className={`btn btn-purple-light`} disabled={!currName.length}>
                    { action }
                </button>
            </div>
        </article>
    )
}

export const Modal = ({ children }) => {


    return ReactDOM.createPortal(<section className="d-flex align-items-center justify-content-center w-100 h-100 modal">

        {
            children
        }

    </section>, document.getElementById('modal'))
}