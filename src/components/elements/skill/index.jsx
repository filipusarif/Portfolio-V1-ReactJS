import React, {   useState } from "react";


export default function index(props){
    const [isHovered, setIsHovered] = useState(null);

    const handleHover = (cardId) => {
        setIsHovered(cardId);
    };

    

    return (
        <div className='h-[200px] w-[170px] bg-gradient-to-t shadow-xl  from-primary to-[80%]  to-secondary py-2 rounded-[15px] transition-all ease'
        onMouseEnter={() => handleHover(props.id)}
        onMouseLeave={() => handleHover(null)}
        >
            <img src={`skill/${props.img}`} alt="Tech" className={`w-[65%] h-[150px] mx-auto transition duration-500 ease-in-out ${isHovered === props.id? "":"filter grayscale" }`}/>
            <p className='text-center text-slate-200 font-bold font-Poppins'>{props.tech}</p>
        </div>
    )
}