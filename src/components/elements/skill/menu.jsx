import React, { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt';


export default function Card(prop){

    const [isHovered, setIsHovered] = useState(null);
    const handleHover = (cardId) => {
        setIsHovered(cardId);
    };
    
    

    return (
        <div
        
        >
        <Tilt   
        tiltReverse='true' 
        tiltMaxAngleX='20' 
        tiltMaxAngleY='20' 
        perspective='1000' 
        style={{
            transformStyle: "preserve-3d",
        }}
        onLeave={() => setIsHovered(null)}
        onEnter={() => handleHover(prop.id)}
        className={`relative h-[200px] w-[150px] lg:w-[170px] bg-gradient-to-t shadow-xl from-primary to-[80%]  to-secondary py-2 rounded-[15px] transition-all ease ${isHovered === prop.id ? 'hovered' : ''}`}
        
        >
            <img
                src={`skill/${prop.img}`}
                alt="Tech"
                className={`w-[150px] h-[150px] mx-auto ${isHovered === prop.id ? '' : 'filter grayscale'}`}
                style={{
                    transform: "translateZ(50px)",
                    width: "65%"
                }}
            />
            <p 
            className='abso text-center text-slate-200 font-bold font-Poppins'
            style={{
                transform: "translateZ(50px)",
            }}
            >{prop.tech}</p>
        </Tilt>
        </div>
    )
}
