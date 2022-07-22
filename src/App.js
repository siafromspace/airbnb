import React from "react"
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card"
import data from "./data"

function App() {
  const dataElements = data.map(element => {
    return <Card
      key={element.id}
      {...element} />
  })
  return (
    <div className="container">
      <Nav />
      <Hero />
      <section className="cards-list">
        {dataElements}
      </section>
    </div>
  )
}

export default App;
