import Card from '../../elements/skill/menu.jsx'
import Aos from "aos";
import 'aos/dist/aos.css';
import React, { useEffect, useState } from "react";

export default function Index() {
    const skill = [
        {
            id:0,
            tech:'HTML',
            img:'card1.svg'
        },
        {
            id:1,
            tech:'CSS',
            img:'card2.svg'
        },
        {
            id:2,
            tech:'JavaScript',
            img:'card3.svg'
        },
        {
            id:3,
            tech:'SASS/SCSS',
            img:'card4.svg'
        },
        {
            id:4,
            tech:'Tailwind',
            img:'card5.svg'
        },
        {
            id:5,
            tech:'Bootstrap',
            img:'card6.svg'
        },
        {
            id:6,
            tech:'ReactJS',
            img:'card7.svg'
        },
        {
            id:7,
            tech:'NextJS',
            img:'card14.svg'
        },
        {
            id:8,
            tech:'PHP',
            img:'card8.svg'
        },
        {
            id:9,
            tech:'Laravel',
            img:'card9.svg'
        },
        {
            id:10,
            tech:'C++',
            img:'card10.svg'
        },
        {
            id:11,
            tech:'Python',
            img:'card11.svg'
        },
        {
            id:12,
            tech:'Django',
            img:'card12.svg'
        },
        {
            id:13,
            tech:'MySql',
            img:'card13.svg'
        },
    ];
    useEffect(() => {
        Aos.init()
    },[]) 
    

    return (
        <div 
        className="container w-full h-fit mx-auto flex flex-wrap justify-center gap-4 mt-7 pb-6"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        data-aos-offset="250"
        // data-aos-delay={ scrollY == 'scroll' ? "30" : "300"}
        >
        {skill.map((card) => (
            <Card id={card.id} tech={card.tech} img={card.img}/>
        ))}
        </div>
    );
    }

