import React from 'react'


export const ModalProyecto = ({nombreProyecto,description,id,requerimiento}) => {
   
    const requeri = [...requerimiento];

    
    return (
        <>
            <a  data-bs-toggle="modal" data-bs-target={`#exampleModal${id}`}>
                {nombreProyecto}
            </a>

            
            <div className="modal fade" id={`exampleModal${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{nombreProyecto}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {description}
                            <div>
                                <h1>Requerimientos</h1>
                            </div>

                            {
                                requeri.map(requerimie => {
                                    return (
                                      

                                            <ul key={requerimie.id}>
                                                <li>
                                                    {requerimie.descripcion}
                                                </li>
                                            </ul>
                                        
                                    )
                                })
                            }
                            
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
