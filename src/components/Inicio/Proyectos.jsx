
import { proyectos } from '../../Data/proyectos';
import { CardProyecto } from './CardProyecto';

import './styleExpectativas.css'
export const Proyectos = () => {

    return (
        <>


            <div className="row">
                {
                    proyectos.map(proyect => {
                        return (
                            <>
                            <CardProyecto {...proyect} />
                            
                            </>
                        )
                    })
                }

            </div>

        </>
    )
}
