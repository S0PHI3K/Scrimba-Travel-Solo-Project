import React from "react";
import Banner from "./components/banner";
import TravelCard from "./components/travelCard";
import data from './data';

function App() {

  const travel = data.map(item => {
    return (
      <TravelCard 
      key={item.id}
      {...item} />
    )
  })
  return (
    <div className="container">
      <Banner />
      {travel}

    </div>
  );
}

export default App;
