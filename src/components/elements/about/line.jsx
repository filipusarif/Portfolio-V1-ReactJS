export default function index(prop){
    return (<>
        <p className="hover:bg-white hover:bg-opacity-10 w-full h-fit px-12 flex"><span className="mr-6">{prop.no}</span>{prop.children}</p>
    </>)
}

