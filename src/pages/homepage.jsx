import React, { useState } from 'react';
import Hero from '../components/layouts/Hero'
import Navbar from '../components/layouts/Navbar'
import About from '../components/layouts/About'
import Background from '../components/layouts/Background'
import Projects from '../components/layouts/Projects'
import Skill from '../components/layouts/Skill'
import Contact from '../components/layouts/Contact'
import Footer from '../components/layouts/Footer'
import Loader from '../components/layouts/Loader'
import AnimatedCursor from "react-animated-cursor"


export default function Homepage(){
    const [loaderComplete, setLoaderComplete] = useState(false);

    const handleLoaderComplete = () => {
        setLoaderComplete(true);
    };
    return[
        <>
        {!loaderComplete && <Loader onComplete={handleLoaderComplete} />}
        <section className={`h-fit w-screen relative ${loaderComplete ? 'overflow-auto' : ' invisible overflow-hidden'}`}>
            <Loader />
            <Background />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skill />
            <Contact />
            <Footer />
            <AnimatedCursor
            innerSize={5}
            outerSize={35}
            color='33, 150, 243'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={1.5}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
            ]}
            innerStyle={{
                backgroundColor: '#2196F3'
            }}
            outerStyle={{
                border: '1px solid #2196F3'
            }}
            />
        </section>
        </>
    ]
}