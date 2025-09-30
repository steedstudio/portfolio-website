export default function SoundMediaCard({source, title, description, link = ""}) {
    return(
        <div className="mt-4 rounded-lg w-3/4 p-4 bg-white shadow-lg border-[#ccc] border-1">
            <audio controls className="w-full rounded-lg">
                <source src={source} type="audio/wav"/>
                Your browser does not support the audio element.
            </audio>
            <h2 className="m-2 font-bold">{title}</h2>
            <p className="m-2 text-[#666]">{description}</p>

            {!(link === "") && (
                <a href={link} target="_blank" 
                className="m-2 text-blue-600 hover:underline visited:text-purple-600 cursor-pointer transition-colors duration-200">
                Check it out here!</a>
            )}
        </div>
    )
}