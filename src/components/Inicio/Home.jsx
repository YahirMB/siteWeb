import { Footer } from "../Home/Footer"
import { Expectativas } from "./Expectativas"
import { Proyectos } from "./Proyectos"


export const Home = () => {
  return (
    <>

      <div className="contenedorHome mt-5">
        <p className="tituloHome">Hola bienvenido</p>
        <br />
        <p className="otro">Portafolio de Alexander</p>
      </div>

      <div className="bodyPage">


        <div className="proyectos">
          <p className="subtemas">Proyectos</p>

          <div className="proyectoTarjetas">
            <Proyectos />
          </div>

        </div>
        <br />
        <br />
        <h1 className="subtemas">Expectativas</h1>
        <br />
        <Expectativas />
      </div>
      <br />
      <br />
      <Footer />

    </>
  )
}
