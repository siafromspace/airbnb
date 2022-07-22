import React from "react"

function Hero() {
    return (
        <section className="hero">
            <img src={require("../img/hero.jpg")} className="hero--img" alt="hero" />
            <h2 className="hero--header">Online Experiences</h2>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero