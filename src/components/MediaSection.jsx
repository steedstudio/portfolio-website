"use client";
import { useState } from "react";
import MusicTab from "@/components/MusicTab";
import SoundMediaCard from "@/components/SoundMediaCard";
import YoutubeMediaCard from "@/components/YoutubeMediaCard";

export default function MediaSection() {
    const [activeCategory, setActiveCategory] = useState("Music");
    
    return(
        <>
            <div className="border-1 border-[#ccc] rounded-xl shadow max-w-2xl w-full flex flex-row justify-center overflow-hidden mt-4">
                <MusicTab name={"Music"} active={activeCategory} setActive={setActiveCategory}/>
                <MusicTab name={"SFX"} active={activeCategory} setActive={setActiveCategory}/>
                <MusicTab name={"Rescore"} active={activeCategory} setActive={setActiveCategory}/>
            </div>

            {activeCategory === "Music" && (
                <>
                    <SoundMediaCard 
                    source={"/sounds/Intro and Outro Music Mastered.wav"} 
                    title={"The Upside of Gaming Podcast"}
                    description={"Created for a podcast regarding the positive influence of video games."}
                    link="https://martakos.co.uk/podcasts/"
                    />

                    <SoundMediaCard 
                    source={"/sounds/MASTER Minimal_Groove.wav"}
                    title={"Twitch Livestream Start Music"}
                    description={"Created for a video game livestream."}
                    />

                    <SoundMediaCard 
                    source={'/sounds/MASTER_Theme_Song.wav'}
                    title={"Twitch Raid Music"}
                    description={"Created for a livestream Twitch Raid."}
                    />
                </>
            )}

            {activeCategory === "SFX" && (
                <>
                    <SoundMediaCard 
                    source={"/sounds/ba da ding.wav"}
                    title={"Game Start Sound"}
                    description={"Created for my first game jam."}
                    />

                    <SoundMediaCard 
                    source={"/sounds/Coin_Reverb.wav"}
                    title={"Coin + Reverb Alert Sound"}
                    description={"Created for new subscriber/follower alerts for a livestream."}
                    />
                </>
            )}

            {activeCategory === "Rescore" && (
                <> 
                    <YoutubeMediaCard 
                    source={"https://www.youtube.com/embed/szKGKMhXCOI?si=2NlV-NIP2XLVUndC"}
                    title={"Animal Well"}
                    />

                    <YoutubeMediaCard 
                    source={"https://www.youtube.com/embed/K5XtkiRaU_Y?si=gwL4-ZrvVm7MIHxS"}
                    title={"Hyper Light Drifter"}
                    />
                </>
            )}
        </>
        
    )
}