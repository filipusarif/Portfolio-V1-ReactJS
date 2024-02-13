import Line from '../../elements/about/line.jsx'
import { ReactTyped } from "react-typed";
import { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'


export default function index() {
    useEffect(() => {
        Aos.init()
    },[]) 
    return (
        <section 
        className="container m-auto grid place-items-center pb-16 pt-24 relative  h-fit overflow-hidden" 
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-duration="900"
        data-aos-offset="400">
            <Tab v="invisible" b="bg-complementary absolute" />
            <Tab v="visible" b="bg-gradient-to-tr  from-primary from-[20%] to-secondary relative"/>
        </section>
    )
}

const Tab = (props) => {
    var startDate = new Date('2004-05-10');
    var currentDate = new Date();
    var timeDifference = currentDate - startDate;
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return (
        <div 
        className={` ${props.b} ${props.stat} mt-34 h-auto shadow-lg overflow-hidden rounded-[40px] skew-x-[8deg] md:skew-x-[10deg] z-10 ${props.v == 'invisible'? "w-[74%] md:w-[79.8%] top-24 mt-[1px]":"w-[81.5%] md:w-[91.5%]  pb-[2.8px]  md:animate-[about_5s_ease_infinite] animate-[about2_5s_ease_infinite]"} `}
        id='About'
        >
            <div className={` ${props.v} flex px-12 pt-8 items-center mb-[20px] w-full`}>
                <div className="basis-[20%] flex items-center gap-[5px] lg:gap-[10px] drop-shadow-md">
                    <div className="bg-[#FD5D55]  w-[15px] h-[15px] lg:w-[25px] lg:h-[25px] rounded-full"/>
                    <div className="bg-[#FEBC2D]  w-[15px] h-[15px] lg:w-[25px] lg:h-[25px] rounded-full"/>
                    <div  className="bg-[#26C73E] w-[15px] h-[15px] lg:w-[25px] lg:h-[25px] rounded-full"/>
                </div>
                <p className="basis-[80%] text-very-light text-center -translate-x-[12%] drop-shadow-lg">AboutMe.js</p>
            </div>
            <div className={`${props.v} text-[#818181] container-with-hidden-scrollbar overflow-x-auto pb-8 w-full font-FiraCode  text-[15.5px]`}>
                <div className='w-[1000px]'>
                    <Line no="01"> <span className='text-yellowAbout'>Class </span><span className='text-redAbout'>{`FilipusArif`} </span><span className=' text-yellowAbout'>{`{`}</span></Line>
                    <Line no="02"> <span>···</span>{`// solve the problem.`}</Line>
                    <Line no="03"> <span>···</span>{`// Then, write the code.`}</Line>
                    <Line no="04"> <span>···</span><span className=' text-yellowAbout'>{`constructor`}</span><span className='text-purpleAbout'>{`() {`}</span></Line>
                    <Line no="05"> <span>······</span><span className='text-slate-300'><span className='text-redAbout'>this</span>.<span className='text-lightBlueAbout'>{`name`}</span><span> = </span><span className=' text-brownAbout'>'Filipus Arif Kristiyan'</span><span>;</span></span></Line>
                    <Line no="06"> <span>······</span><span className='text-slate-300'><span className='text-redAbout'>this</span>.<span className='text-lightBlueAbout' >{`dayOfBirthTimestamp`}</span><span> = </span><span className='text-lightBlueAbout'>{days}</span><span>;</span></span></Line>
                    <Line no="07"> <span className='flex'><span>······</span><span className='text-slate-300 flex'><span className='text-redAbout'>this</span>.<span className='text-lightBlueAbout' >{`hobbies`}</span><span> = </span><span className='text-blueAbout'>{`[`}</span><span className=' text-brownAbout'>"Coding"</span><span>,</span><span className=' text-brownAbout'><ReactTyped strings={['"playing Rubik\'s Cube"','"Eating"','"Sleep"','"don\'t do anything, just breathe"']} typeSpeed={100} backSpeed={50} loop/></span><span className='text-blueAbout'>{`]`}</span><span>;</span></span></span></Line>
                    <Line no="08"> <span>······</span><span className='text-slate-300'><span className='text-redAbout'>this</span>.<span className='text-lightBlueAbout' >{`email`}</span><span> = </span><span className=' text-brownAbout'>'filipusarif10@gmail.com'</span><span>;</span></span></Line>
                    <Line no="09"> <span>······</span><span className='text-slate-300'><span className='text-redAbout'>this</span>.<span className='text-lightBlueAbout' >{`education`}</span><span> = </span><span className=' text-brownAbout'>'undergraduate student in information engineering'</span><span>;</span></span></Line>
                    <Line no="10"> <span>···</span> <span className='text-purpleAbout'>{`}`}</span></Line>
                    <Line no="11"> <span>···</span> <span className='text-lightBlueAbout'>{`Aboutme`}</span><span className='text-purpleAbout'>{`() {`}</span></Line>
                    <Line no="12"> <span>······</span><span className=' text-yellowAbout'>{`return`}</span><span className='text-blueAbout'>{`[`}</span></Line>
                    <Line no="13"> <span>·········</span><span className=' text-brownAbout'>{`\`Hello! I'm `} <span className=' text-yellowAbout'>{`\${`}</span><span className='text-redAbout'>this</span><span className='text-slate-300'>.</span><span className='text-lightBlueAbout'>name</span><span className=' text-yellowAbout'>{`}`}</span>{`, a passionate web developer with a knack \``}<span className='text-slate-300'>,</span></span></Line>
                    <Line no="14"> <span>·········</span><span className=' text-brownAbout'>{`\`for crafting dynamic and user-friendly digital experiences.\``}<span className='text-slate-300'>,</span></span></Line>
                    <Line no="15"> <span>·········</span><span className=' text-brownAbout'>{`\`With a strong foundation in both front-end and back-end technologies,\``}<span className='text-slate-300'>,</span></span></Line>
                    <Line no="16"> <span>·········</span><span className=' text-brownAbout'>{`\`I thrive on turning creative ideas into functional, visually appealing websites.\``}<span className='text-slate-300'>,</span></span></Line>
                    <Line no="17"> <span>······</span><span className='text-blueAbout'>{`]`}</span></Line>
                    <Line no="18"> <span>···</span> <span className='text-purpleAbout'>{`}`}</span></Line>
                    <Line no="19"> <span className=' text-yellowAbout'>{`}`}</span></Line>
                </div>
            </div>
        </div>
    )
}