import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import data from "./Components/data";

export default function App() {
  const cards= data.map(item => {
    return(
      <Card 
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    )
  })
  return(
    <div>
      <Navbar />
      <section className="card--list">
        {cards}
      </section>
    </div>
  )
}