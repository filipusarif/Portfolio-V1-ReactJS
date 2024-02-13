import React, { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt';
import Arrow from '../../../assets/images/arrowProjectNew.svg'
import Aos from "aos";
import 'aos/dist/aos.css'

export default function index(prop){
    const [isHovered, setIsHovered] = useState(null);

    const handleHover = (cardId) => {
        setIsHovered(cardId);
    };
    useEffect(() => {
        Aos.init()
    },[]) 

    return (
    
        <a 
        href={prop.linkProject} 
        className="relative w-[100%] lg:w-[45%] font-Roboto text-white font-extrabold cardProject" 
        target="_blank"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos-offset="250"
        data-aos-delay={ prop.noProject % 2 == 0 ? "0" : "200"}
        >
            <Tilt
            
            tiltReverse='true' 
            tiltMaxAngleX='20' 
            tiltMaxAngleY='20' 
            perspective='4000' 
            scale='1.1'
            style={{
                transformStyle: "preserve-3d",
                width: 'full',
                height: 'full'
            }}
            onLeave={() => setIsHovered(null)}
            onEnter={() => handleHover(prop.id)}
            className="relative w-full h-full">
                <img src={`project/${prop.imgProject}`} alt="Project"  className='w-full drop-shadow-lg rounded-lg'/>
                <div className='absolute bottom-1 lg:bottom-3 -left-10 w-[80%]  text-very-light' 
                style={{
                    transform: "translateZ(50px)",
                }}>
                    <h3 className='lg:text-[170%] text-[130%] drop-shadow-md  '>{prop.nameProject}</h3>
                    <div className='h-[3px] w-[40%] bg-very-light'/>
                    <div className='flex justify-between items-center w-[40%]'>
                        <p>{prop.noProject}</p>
                        <img src={Arrow} alt="arrow" className=""/>
                    </div>
                </div>
            </Tilt>
        </a>
    )
    
}