import React from 'react'
import ReactPlayer from 'react-player'
// require('../../assets/')


export const Videos = () => {
    return (
        <>
            <div className="col-12 col-lg-6">
                <p className='subtemavideo'>Proyecto de estadias</p>
                
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=jdYj8Slm3D4'
                    className='bodyVideo'
                  
                    controls
                />
            </div>
             <div className="col-12 col-lg-6 ">
             <p className='subtemavideo'>Proyecto de VeniFoodApp</p>
                <ReactPlayer
                    url= 'https://www.youtube.com/watch?v=yy6lCEFjJiI'
                    className='bodyVideo'
                    
                    controls
                />
            </div>
        </>
    )
}
