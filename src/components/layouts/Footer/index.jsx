import Logo from '../../../assets/images/logoFull.svg'
import Github from '../../../assets/images/githubFooter.svg'
import Linkedin from '../../../assets/images/linkedinFooter.svg'
import Instagram from '../../../assets/images/instagramFooter.svg'


export default function index(){
    return (
        <section className="z-50 w-full min-h-[51vh] bg-[#141C31]  ">
            <div className="container gap-3 h-full mx-auto flex flex-col py-10 text-[95%] text-slate-400 font-Poppins">
                <div className='flex basis-[90%]  lg:flex-row flex-col'>
                    <div className='basis-[60%] flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <a href="#" className='w-fit'><img src={Logo} alt="" className='w-[130px] -translate-x-2'/></a>
                            <p className='leading-5 text-[95%] -mt-1 drop-shadow-lg'>As a passionate and dedicated web developer, I thrive on transforming 
                                ideas into engaging and functional digital experiences. With a strong
                                foundation in front-end technologies such as HTML, CSS, and JavaScript, 
                                I specialize in crafting visually appealing and user-friendly interfaces 
                                that leave a lasting impression.</p>
                        </div>
                        <div>
                            <h3 className='text-[130%] font-bold text-slate-200'>Address</h3>
                            <p className='leading-5 drop-shadow-lg'>Blado 51255 <br />
                                Batang, Central Java, Indonesia</p>
                        </div>
                    </div>
                    <div className='basis-[22%] h-full flex flex-col lg:items-center gap-3 lg:text-center'>
                        <h3 className='text-[130%] font-bold text-slate-200 mt-2'>Categories</h3>
                        <p className=''>Web</p>
                        <p>Portfolio</p>
                        <p>Design</p>
                        <p>Tech</p>
                        <p>Grafis</p>
                    </div>
                    <div className='basis-[18%]  flex flex-col lg:gap-3.5 z-40'>
                        <h3 className='text-[130%] font-bold text-slate-200 mt-2'>Contact</h3>
                        <a target='_blank' href="https://github.com/filipusarif" className='flex justify-start gap-3 items-center'><img src={Github} alt="" className='w-[8%] lg:w-[14%]'/>Github</a>
                        <a target='_blank' href="https://www.linkedin.com/in/filipus-arif-kristiyan/" className='flex justify-start gap-3 items-center mt-4'><img src={Linkedin} alt=""  className='w-[8%] lg:w-[14%]'/>Linkedin</a>
                        <a target='_blank' href="https://www.instagram.com/filipusarif._/" className='flex justify-start gap-3 items-center mt-4'><img src={Instagram} alt=""  className='w-[8%] lg:w-[14%]'/>Instagram</a>
                    </div>
                </div>
                <div className='h-[3px] bg-opacity-70 w-full bg-slate-500 rounded-md'/>
                <div className='flex lg:flex-row flex-col-reverse gap-2 lg:gap-0 justify-between lg:items-center text-[110%]'>
                    <p className='text-slate-200 drop-shadow-lg'>© Created by <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1f70aa]  to-[#1CDAAC]'> FilipusArif </span></p>
                    <p className='text-slate-200 drop-shadow-lg'>filipusarif10@gmail.com</p>
                </div>
            </div>
        </section>
    )
}