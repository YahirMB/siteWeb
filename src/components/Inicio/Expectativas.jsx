
import { CardExpectativas } from "./CardExpectativas"

import {espectativas } from "../../Data/espectativas"

export const Expectativas = () => {
    return (
        <>




            <div className="row row-cols-1 row-cols-md-3 g-4">
              
              {espectativas.map( generExpect =>{
                return(
                  <CardExpectativas key={generExpect.id} {...generExpect} />
                  )
                })}
            
            </div>
          

        </>
    )
}
