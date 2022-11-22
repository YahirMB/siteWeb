import React from 'react'

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
                            <CardProyecto key={proyect.id} {...proyect} />
                            
                            </>
                        )
                    })
                }

            </div>

        </>
    )
}
