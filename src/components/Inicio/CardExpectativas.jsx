
export const CardExpectativas = ({ descripcion, icono, palabra }) => {
    return (
        <>

            <div className="col">

                <div className="card contenedorE">
                    <div className="card-header headerE">
                        <p>{descripcion}</p>

                    </div>
                    <div className="card-body">

                        <div className="cardBE">
                            <div className="icono">
                                <i className={`${icono}`} >

                                </i>
                                <div className="palabra"> {palabra} </div>
                            </div>

                        </div>




                    </div>
                </div>
            </div>
        </>
    )
}
