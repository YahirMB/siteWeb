import './styleContact.css'
import { Videos } from './Videos'


export const Contact = () => {
  return (
    <>
    <div className='bodyPage'>

      <p className='tituloContacto'>Videos de proyectos</p>
      <div className='contenedorVideo text-center justify-content-center'>

<hr />
        <div className="row ">
         
          <Videos />
        </div>

      </div>

    </div>
    </>
  )
}
