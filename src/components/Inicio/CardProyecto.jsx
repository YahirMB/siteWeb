

export const CardProyecto = ({name,description,src}) => {
    return (
        <>
      

            <div className="col-sm-12 col-lg-4  mt-5" >
                <div className="card cardP">
                    <img src={src} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        
                    </div>
                </div>
            </div>
       
        </>
    )
}
