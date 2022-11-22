
import './styleAboutMe.css';


import { lenguajes, software, frameWorks, proyectos } from '../../Data';


export const AboutMe = () => {
  return (
    <>
      <div className='bodyPage'>

        <p className='titulo'>Acerca de mí</p>
        <hr />

        <div className="row contenedorProye">

          <div className="col-sm-12 col-lg-5 colorColum">
            
            
            <p className='subtitulosAbout'>Resumen profesionista</p>
              <div className='descrpcion'>
              <p>Hola que tal mi nombre es Yahir Alexander tengo 19 años, actualmente me encuentro estudiando
                en la Universidad Tecnológica de Aguascalientes en la ING.Desarrollo y Gestion de Sotfware,
                Me encanta Programar para Back-End y Front-End. Ahora mismo estoy buscando trabajo para asi fortalezar y aplicar lo aprendido
                en la universidad e igual buscando una oportunidad de adquirir experiencia laboral.

              </p>
              </div>
              

              <br />

              <p className='subtitulosAbout'>Por que decidi estudiar esto</p>
              <div className='descrpcion'>

              <p>Decidí estudiar esta carrera ya que a mí me apaciona la tecnológia, los retos y además por que cuando
                desarrollo una app o una pagina web me visualizo que algún día crearé una tecnológia que le guste a la gente.
              </p>
              </div>
              <br />
              <p className='subtitulosAbout'>Proyectos</p>
              <div className='descrpcion'>

              <p>
                En el transcurso de mi carrera he desarrollado algunos proyectos que utilizan como:

                

              </p>
              <ul>
                  <li>lenguaje javaScript y java que además de
                    estos lenguajes me ayudaron a entender la programacion orienta objetos y el mundo de la web.
                  </li>
                  <li>
                    Nodejs como servidor de lado del back-end a construir APIS, modulos, usar patrones de diseño como MVC y como funcionan las promesas.
                  </li>
                  <li>
                  frameworks como react,angular que me han enseñado el uso de componentes, la comunicacion entre ellos y que nos facilitan las cosas como desarrolladores ya que es un entorno de trabajo 

                  </li>
                </ul>

            </div>
          </div>
          
          <div className="col-6 col-lg-4">

            <h3 className='subtitulosAbout'>Software</h3>


            <ul >
              {software.map(listSoft => {
                return (
                  <li className="listProyectos" key={listSoft.id}>{listSoft.nombre}</li>
                )
              })}
            </ul>


            <br />
            <div className="col-5">
              <h3 className='subtitulosAbout'>Lenguajes</h3>
              <ul >
                {
                  lenguajes.map(listLengu => {
                    return (
                      <li className="listProyectos" key={listLengu.id}>{listLengu.nombre}</li>
                    )
                  })
                }

              </ul>
            </div>

          </div>

          <div className='col-6 col-lg-2'>
            <h3 className='subtitulosAbout'>FrameWorks</h3>
            <ul >
              {
                frameWorks.map(listFrame => {
                  return (
                    <li className="listProyectos" key={listFrame.id}>{listFrame.nombre}</li>
                  )
                })
              }


            </ul>
            <br />
            <div className='col'>
              <h3 className='subtitulosAbout'>Baes de datos </h3>
              <ul >
                <li className="listProyectos">MongoDB</li>
                <li className="listProyectos">Mysql</li>
                <li className="listProyectos">Mysql workbench</li>
                <li className="listProyectos">Xampp</li>
              </ul>

            </div>
          </div>

        </div>



      </div>
    </>

  )
}
