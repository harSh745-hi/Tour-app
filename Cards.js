#Component  {Cards}

import { useState } from "react";

function Cards({id,image,info,price,name,removeTour})
{
   const[readmore,setReadmore] =useState(false);
    const description = readmore ? info :`${info.substring(0,140)}...`

    function readmoreHandler()
    {
        setReadmore(!readmore);
    }
   

    return(
       <div className="card">
         
          <img src={image} className="image" />

            <div className="tours-info">
                  <div className="tours-details">
             <h4 className="tours-price">₹{price}</h4>
             <h4 className="tours-name">{name}</h4>
            </div>

            <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? `show less ` : `read more`}
                </span>
            </div>

            </div>
          
            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
       </div>
    );

}
export default Cards;
