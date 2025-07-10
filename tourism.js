#Component {tourism}

import Cards from "./Cards";
function Tourism({tours,removeTour})
{

    return (
        <div className="container">
            <div>
               <h2 className="title">
                Plan with love
               </h2> 
            </div>
            <div className="cards">
            {
                tours.map( (tour) => {
                         return   <Cards key={tour.id}{...tour} removeTour={removeTour}></Cards>
                })
            }
                
              
            
            </div>
        </div>

    );
}

export default Tourism;
