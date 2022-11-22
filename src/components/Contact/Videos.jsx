import React from 'react'
import ReactPlayer from 'react-player'
// require('../../assets/')
import Video from '../../assets/proyectoEstadias.mp4'
import Video2 from '../../assets/VeniFoodApp.mp4'
export const Videos = () => {
    return (
        <>
            <div className="col-12 col-lg-6">
                <p className='subtemavideo'>Proyecto de estadias</p>
                
                <ReactPlayer
                    url= {Video}
                    className='bodyVideo'
                  
                    controls
                />
            </div>
             <div className="col-12 col-lg-6 ">
             <p className='subtemavideo'>Proyecto de VeniFoodApp</p>
                <ReactPlayer
                    url= {Video2}
                    className='bodyVideo'
                    
                    controls
                />
            </div>
        </>
    )
}
