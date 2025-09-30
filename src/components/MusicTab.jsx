import clsx from "clsx";

export default function MusicTab({name, active, setActive}) {
    function handleClick() {
        setActive(name);
        console.log(`${name} is active!`)
    }
    
    return (
        <button 
        // className="py-4 flex-1 border-r-1 last:border-r-0 border-[#ccc] hover:bg-gray-300 transition-colors duration-200"
        className={clsx(
            "py-4 flex-1 border-r-1 last:border-r-0 border-[#ccc]",
            active === name 
            ? "bg-blue-500 text-white" //Active state
            : "hover:bg-gray-300"
        )}
        onClick={handleClick}
        >{name}</button>
    )
}