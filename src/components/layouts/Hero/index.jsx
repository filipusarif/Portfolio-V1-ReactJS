import Person from '../../../assets/images/arif.png'
import Github from '../../../assets/images/Github.svg'
import Linkedin from '../../../assets/images/Linkedin.svg'
import Instagram from '../../../assets/images/Instagram.svg'
import Send from '../../../assets/images/Send.svg'
import Element1 from '../../../assets/images/element1.svg'
import Element2 from '../../../assets/images/element2.svg'
import Element3 from '../../../assets/images/element3.svg'
import { useLayoutEffect, useRef, useEffect } from 'react';
import gsap from 'gsap'
import Tilt from 'react-parallax-tilt';




export default function index() {
    const comp = useRef(null)
    const imgRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
        const t1 = gsap.timeline();
            t1.from(['#info','#info2','#info3','#info4','#info5','#info6'], { // Use imgRef.current to access the img element
                opacity: 0,
                y: "+=30",
                stagger: 0.2,
            }).to(['#info','#info2','#info3','#info4','#info5','#info6'], {
                opacity: 1,
                duration:0,
            }).from([imgRef.current], { // Use imgRef.current to access the img element
                opacity: 0,
                x: "+=30",
                stagger: 0.2,
            }).to([imgRef.current], {
                opacity: 1,
                x:"=0"
            });
            }, comp);
        
        });

    return (
        <section 
        className="container min-h-screen m-auto flex flex-col-reverse items-center font-Roboto text-white relative pt-20 gap-10 lg:flex-row lg:pt-0 lg:gap-0" 
        id='Hero'
        ref={comp}
        >
            <div className='basis-[50%]  px-4 lg:px-0 font-Roboto opacity-100'
            id='info'
            >
                <p id="info2" className=' font-Poppins gap-2  font-reguler flex items-center drop-shadow-lg text-[120%] lg:text-[140%]'>Introduction <div className='h-[4px] w-[30px] bg-lightBlueAbout rounded-[2px]'></div> </p>
                <h1 id="info3" className='mt-2 drop-shadow-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2996E5] via-[#1CDAAC] via-[90%] to-[#1CDAAC] text-[220%] leading-[110%]  md:text-[370%] md:leading-[105%] w-full'>Web Developer and  UI Designer, based  in Semarang.</h1>
                <p id="info4" className='mt-3 w-[90%] text-very-light drop-shadow-2xl text-[80%] leading-4 md:text-[95%] md:leading-5'>Hello! I am a skilled and enthusiastic web developer with a passion for translating concepts into captivating online experience. Proficient in front-end technologies like HTML, CSS, and JavaScript ETC.</p>
                <a id="info5" href="#Contact" className=' bg-complementary mt-5 py-[10px] w-[155px] flex items-center justify-center rounded-[10px] gap-[5px] drop-shadow font-medium'>Contact Me <img src={Send} alt="send" /></a>
                <div id="info6" className='flex items-center gap-[10px] mt-14 lg:gap-[15px] lg:mt-20'>
                    <Icon to="https://github.com/filipusarif" source={Github} alt="Github" w="31px"/>
                    <Icon to="https://www.linkedin.com/in/filipus-arif-kristiyan/" source={Linkedin} alt="Linkedin" w="31px"/>
                    <Icon to="https://www.instagram.com/filipusarif._/" source={Instagram} alt="Instagram" w="31px"/>
                </div>
            </div>
            <Profile imgRef={imgRef} />
        </section>
    )
}

const Icon = (prop) => {
    return (
    <a href={prop.to} target='_blank'>
        <img src={prop.source} alt={prop.name} className={`lg:w-[${prop.width}] w-[25px]`}/>
    </a>
    )
}

const Profile = ({ imgRef }) => {
    
    return (
        <div ref={imgRef} className='basis-[50%]  relative w-[90%] lg:w-[100%]' >
        <Tilt 
        trackOnWindow="true" 
        tiltReverse='true' 
        tiltMaxAngleX='15' 
        tiltMaxAngleY='15' 
        perspective='1000' 
        style={{
            transformStyle: "preserve-3d",
        }}
        
        >
                <img src={Person} alt="Filipus Arif"
                style={{
                    transform: "translateZ(10px)",
                }}
                />
                <img src={Element1} alt="" className='absolute drop-shadow-lg md:w-auto   w-[25px] bottom-[2%] left-[20%] animate-[item1_20s_ease_infinite]' />
                <img src={Element2} alt="" className='absolute drop-shadow-lg md:w-auto   w-[25px] top-[50%] left-[15%] animate-[item2_15s_linear_infinite]'/>
                <img src={Element1} alt="" className='absolute drop-shadow-lg md:w-[20px] w-[15px] top-[30%] left-[20%] z-50 animate-[item3_15s_ease-in-out_infinite]'/>
                <img src={Element3} alt="" className='absolute drop-shadow-lg md:w-auto   w-[25px] bottom-[40%] right-[2%] animate-[item4_15s_ease-in-out_infinite]'/>
                <img src={Element1} alt="" className='absolute drop-shadow-lg md:w-[25px] w-[15px] top-[20%] right-[20%]  animate-[item5_30s_ease-out_infinite]'/>
                <img src={Element2} alt="" className='absolute drop-shadow-lg md:w-[25px] w-[20px] bottom-[10%] -right-[5%]  animate-[item6_30s_ease-out_infinite]'/>
                <div className='absolute bottom-2 right-6 md:right-10 drop-shadow-lg' style={{transform: "translateZ(60px)"}}>
                    <h1 className='font-bold text-[140%] md:text-[260%] leading-[115%]'>Filipus Arif <br /> Kristiyan.</h1>
                    <div className='h-[3px] w-[52px] md:h-[5px] md:w-[98px] bg-complementary -mt-[3px] md:-mt-[6px] rounded-[2px]'/>
                </div>
            </Tilt>
            </div>
    )
}