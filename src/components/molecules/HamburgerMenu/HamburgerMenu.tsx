import React, { useState } from 'react'
import "./style.css"


const HamburguerMenu = () => {
    const [isActive, setActive] = useState(false)
    const handleToggle = () => {
        setActive((isActive)=> !isActive)
    }

    return (
        <button className={`hamburger hamburger--squeeze ${isActive ? 'is-active' : ''}`} type="button" onClick={handleToggle}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}

export default HamburguerMenu