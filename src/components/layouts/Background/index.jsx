import Vector from '../../../assets/images/Vector1.svg'

export default function index() {
    return (<section className='w-screen h-full -z-10 overflow-hidden absolute'>
            <img src={Vector} alt="" className='absolute -left-[40%] -top-[2%] lg:-top-[20%] w-[1100px] animate-[bg1_20s_ease-in_infinite]'/>
            <img src={Vector} alt="" className='absolute -right-[50%] lg:-right-[2%] top-[3%] lg:top-[0%] w-[700px] animate-[bg2_30s_ease-in_infinite]'/>
            <img src={Vector} alt="" className='absolute left-[2%] top-[27%] lg:top-[25%] w-[600px] opacity-40 animate-[bg7_55s_ease_infinite]'/>
            <img src={Vector} alt="" className='absolute right-[20%] top-[35%] w-[900px] opacity-80 animate-[bg3_50s_ease_infinite]'/>
            <img src={Vector} alt="" className='absolute right-[-25%] top-[50%] w-[800px] opacity-70 animate-[bg4_40s_ease-in_infinite]'/>
            <img src={Vector} alt="" className='absolute right-[40%] top-[75%] w-[900px] opacity-50 animate-[bg5_50s_ease_infinite]'/>
            <img src={Vector} alt="" className='absolute right-[-40%] top-[80%] w-[800px] opacity-50 animate-[bg6_40s_ease_infinite]'/>
        </section>
    )
}