import { proyectos } from '../../Data/proyectos';

export const CardProyecto = () => {
    

   
    return (
        <>
        {
                proyectos.map( project => {
                    return (

                        <div className="col-sm-12 col-lg-4 mt-5" key={project.id} >
                            <div className="card cardP">
                                <img src={project.src} className="card-img-top " alt="..." />
                                <div className="card-body" >
                                    <h5 className="card-title">{project.name}</h5>
                                    <p className="card-text" >{project.description}</p>

                                </div>
                            </div>
                        </div>

                    )
                })
        }
           
        </>
    )
}
