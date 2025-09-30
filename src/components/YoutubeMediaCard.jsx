export default function YoutubeMediaCard({source, title}) {
    return(
        <div className="mt-4 rounded-lg w-3/4 p-4 bg-white shadow-lg border-[#ccc] border-1">
            <iframe
                className="aspect-video rounded-lg w-full"
                src={source}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                />

            <h2 className="m-2 font-bold">{title}</h2>
        </div>
    )
}