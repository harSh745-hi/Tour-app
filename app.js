import React, { useState } from "react";
import data from './data'
import Tourism from "./comp/Tourism";

const App =() => {
    

  const[tours,setTours] = useState(data);

 function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours);
  
 }
if(tours.length === 0)
{
  return (
     <div className="refresh"> 
      <h2>To Tours Left </h2>
      <button className="btn-white" onClick={()=> setTours(data)}>Refresh</button>
     </div>
  );
}
  return (
   
    <div className="App">

      <Tourism tours={tours} removeTour={removeTour}></Tourism>
    </div>

  );
}



export default App;


