import Card from '../../elements/skill/index.jsx'

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




export default function index(){
    

    return (
    <div className='w-screen h-fit flex items-center relative' id='scroll'>
        <WrapperCard />
        <WrapperCard />
        <div className='absolute left-0 w-[15%] h-[200px] bg-gradient-to-r from-primary   to-[#ffffff00]'/>
        <div className='absolute right-0 w-[15%] h-[200px] bg-gradient-to-l from-primary   to-[#ffffff00]'/>
    </div>
    )
}

const WrapperCard = () => {
    
    return (
        <div className="h-[250px] flex items-center w-fit gap-4 animate-[scroller_40s_linear_infinite] mx-2" id="innerScroller">
            {skill.map(card => (
                <Card id={card.id} img={card.img} tech={card.tech}/>
            ))}
        </div>
    )
}